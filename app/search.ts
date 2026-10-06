/** Smart concept search: bilingual synonyms (Indonesian, English, Latin),
 * typo tolerance, and "did you mean" suggestions for the atlas search box. */
import type {Atlas,Concept} from './anatomy'

/** Lowercase, strip accents & punctuation, collapse whitespace. */
function norm(text:string):string{
  return text.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim()
}

/** Alias → canonical atlas concept name (normalized). Keep in sync with knowledge.ts keys. */
const SYNONYMS:Record<string,string>={
  // Indonesian → atlas names
  jantung:'heart',hati:'liver',otak:'brain',paru:'lung','paru paru':'lung',ginjal:'kidney',lambung:'stomach',
  'usus halus':'small intestine','usus besar':'large intestine',kolon:'colon','usus buntu':'appendix',
  'poros usus':'rectum',rektum:'rectum','kandung kemih':'urinary bladder','kandung empedu':'gallbladder',
  limpa:'spleen',kerongkongan:'esophagus',tenggorokan:'trachea',tenggorok:'trachea','pangkal tenggorokan':'larynx',
  lidah:'tongue','tulang paha':'femur','tulang kering':'tibia','tulang hasta':'ulna','tulang pengumpil':'radius',
  'tempurung lutut':'patella','tempurung kepala':'skull',tengkorak:'skull','rahang bawah':'mandible',rahang:'mandible',
  'tulang belakang':'vertebral column','tulang punggung':'vertebral column','sumsum tulang':'spinal cord',
  'sumsum tulang belakang':'spinal cord','tulang selangka':'clavicle','tulang belikat':'scapula','tulang dada':'sternum',
  iga:'rib','tulang ekor':'sacrum',sakrum:'sacrum',panggul:'hip bone','tulang panggul':'hip bone',
  rahim:'uterus','indung telur':'ovary','saluran telur':'fallopian tube',tuba:'fallopian tube',
  'leher rahim':'uterine cervix',serviks:'uterine cervix','liang senggama':'vagina',payudara:'mammary gland',
  'ari ari':'placenta','buah zakar':'testis',zakar:'testis','kelenjar hipofisis':'pituitary gland',
  'kelenjar adrenal':'adrenal gland','anak ginjal':'adrenal gland',uretra:'urethra',
  // Latin → atlas names
  cor:'heart',hepar:'liver',encephalon:'brain',cerebrum:'brain',pulmo:'lung',pulmones:'lung',ren:'kidney',
  gaster:'stomach',ventriculus:'stomach','vesica urinaria':'urinary bladder',vesica:'urinary bladder',
  oesophagus:'esophagus','intestinum tenue':'small intestine','intestinum crassum':'large intestine',
  'appendix vermiformis':'appendix','vesica fellea':'gallbladder',lien:'spleen','columna vertebralis':'vertebral column',
  cranium:'skull',calvaria:'skull',mandibula:'mandible',clavicula:'clavicle','os coxae':'hip bone',
  'medulla spinalis':'spinal cord','medulla oblongata':'brainstem','truncus encephali':'brainstem',
  hypophysis:'pituitary gland','glandula pituitaria':'pituitary gland','glandula suprarenalis':'adrenal gland',
  prostata:'prostate',ovarium:'ovary','tuba uterina':'fallopian tube',salpinx:'fallopian tube',
  cervix:'uterine cervix','glandula mammaria':'mammary gland',mamma:'mammary gland',lingua:'tongue',
  'arteria pulmonalis':'pulmonary artery','truncus pulmonalis':'pulmonary artery',
  'vena cava superior':'superior vena cava','vena cava inferior':'inferior vena cava',
  'arteria carotis communis':'common carotid artery','vena jugularis interna':'internal jugular vein',
  'arteria femoralis':'femoral artery','vena femoralis':'femoral vein','vena portae':'portal vein',
  'arteria hepatica':'hepatic artery','truncus celiacus':'celiac trunk','nervus opticus':'optic nerve',
  'nervus cranialis':'cranial nerve',
  // English common names → atlas names
  'heart muscle':'heart','wind pipe':'trachea',windpipe:'trachea','voice box':'larynx',voicebox:'larynx',
  'adam s apple':'larynx','food pipe':'esophagus',foodpipe:'esophagus',gullet:'esophagus',airway:'trachea',
  womb:'uterus','birth canal':'vagina',breast:'mammary gland',backbone:'vertebral column',spine:'vertebral column',
  'spinal column':'vertebral column','collar bone':'clavicle',collarbone:'clavicle','shoulder blade':'scapula',
  kneecap:'patella',shinbone:'tibia','thigh bone':'femur','hip bone':'hip bone',hipbone:'hip bone',jaw:'mandible',
  bladder:'urinary bladder','gall bladder':'gallbladder','small bowel':'small intestine','large bowel':'large intestine',
  lungs:'lung',kidneys:'kidney',
}
const ALIASES=Object.keys(SYNONYMS)

/** Banded Levenshtein edit distance with an early exit at `max`. */
function editDistance(a:string,b:string,max:number):number{
  if(a===b)return 0
  if(Math.abs(a.length-b.length)>max)return max+1
  let prev=new Array(b.length+1),cur=new Array(b.length+1)
  for(let j=0;j<=b.length;j++)prev[j]=j
  for(let i=1;i<=a.length;i++){
    cur[0]=i
    let rowMin=cur[0]
    for(let j=1;j<=b.length;j++){
      const cost=a.charCodeAt(i-1)===b.charCodeAt(j-1)?0:1
      cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+cost)
      if(cur[j]<rowMin)rowMin=cur[j]
    }
    if(rowMin>max)return max+1
    const swap=prev;prev=cur;cur=swap
  }
  return prev[b.length]
}
const allowance=(length:number)=>length<=5?1:length<=11?2:3

interface IndexEntry{concept:Concept;name:string;id:string;words:string[]}
interface AtlasIndex{entries:IndexEntry[];byName:Map<string,Concept>}
const INDEX_CACHE=new WeakMap<Atlas,AtlasIndex>()
function indexFor(atlas:Atlas):AtlasIndex{
  let index=INDEX_CACHE.get(atlas)
  if(index)return index
  const byName=new Map<string,Concept>()
  const entries:IndexEntry[]=[]
  for(const concept of atlas.concepts){
    const name=norm(concept.name),id=norm(concept.id)
    if(name&&!byName.has(name))byName.set(name,concept)
    if(name)entries.push({concept,name,id,words:name.split(' ')})
  }
  entries.sort((a,b)=>a.name.length-b.name.length)
  index={entries,byName}
  INDEX_CACHE.set(atlas,index)
  return index
}

function scoreEntry(entry:IndexEntry,q:string,qs:string):number{
  const {name,id,words}=entry
  if(name===q||id===q)return 1000
  if(name===qs||id===qs)return 990
  if(words.includes(q))return 800
  if(name.startsWith(q))return 820-name.length
  if(name.startsWith(qs))return 810-name.length
  if(words.some(w=>w.startsWith(q)))return 700
  const at=name.indexOf(q)
  if(at>=0)return 620-at*2-name.length
  const ats=name.indexOf(qs)
  if(ats>=0)return 610-ats*2-name.length
  return 0
}

/** Fuzzy-match a query against alias keys, resolving to a canonical concept name. */
function resolveAlias(index:AtlasIndex,q:string):Concept|null{
  const direct=SYNONYMS[q]
  if(direct)return index.byName.get(direct)??null
  if(q.length<4)return null
  let best:Concept|null=null,bestDist=Infinity
  for(const alias of ALIASES){
    if(Math.abs(alias.length-q.length)>2)continue
    const dist=editDistance(q,alias,2)
    if(dist<=Math.min(allowance(alias.length),2)&&dist<bestDist){
      const target=index.byName.get(SYNONYMS[alias])
      if(target){bestDist=dist;best=target}
    }
  }
  return best
}

export interface SearchResult{hits:Concept[];suggestions:Concept[]}
/** Ranked search over atlas concepts with synonyms, plural handling, and typo tolerance. */
export function searchConcepts(atlas:Atlas,query:string,limit=80):SearchResult{
  const index=indexFor(atlas),q=norm(query)
  if(!q)return{hits:[],suggestions:[]}
  const qs=q.length>3&&q.endsWith('s')?q.slice(0,-1):q
  const scored:{entry:IndexEntry;score:number}[]=[]
  for(const entry of index.entries){
    const score=scoreEntry(entry,q,qs)
    if(score>0)scored.push({entry,score})
  }
  // Synonym resolution: exact alias first, then typo-tolerant alias matching.
  const aliasHit=resolveAlias(index,q)
  if(aliasHit){
    scored.push({entry:{concept:aliasHit,name:'',id:'',words:[]},score:900})
  }
  scored.sort((a,b)=>b.score-a.score||a.entry.concept.name.length-b.entry.concept.name.length)
  const hits:Concept[]=[],seen=new Set<string>()
  for(const {entry} of scored){if(!seen.has(entry.concept.id)){seen.add(entry.concept.id);hits.push(entry.concept);if(hits.length>=limit)break}}
  // Typo tolerance against concept names when the query found little.
  const suggestions:Concept[]=[]
  if(hits.length<6&&q.length>=4){
    const fuzzy:{concept:Concept;dist:number}[]=[]
    for(const entry of index.entries){
      let dist=editDistance(q,entry.name,4)
      if(dist>allowance(entry.name.length)){
        for(const word of entry.words){
          if(Math.abs(word.length-q.length)>allowance(word.length))continue
          const wd=editDistance(q,word,allowance(word.length))
          if(wd<=allowance(word.length)&&(wd-dist<-1||dist>allowance(entry.name.length)))dist=wd+1
        }
      }
      if(dist<=Math.min(allowance(entry.name.length)+1,4))fuzzy.push({concept:entry.concept,dist})
    }
    fuzzy.sort((a,b)=>a.dist-b.dist||a.concept.name.length-b.concept.name.length)
    for(const f of fuzzy){if(!seen.has(f.concept.id)){seen.add(f.concept.id);suggestions.push(f.concept);if(suggestions.length>=3)break}}
  }
  return{hits,suggestions}
}
