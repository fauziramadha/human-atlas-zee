import type {Part} from './anatomy'
export type RegionId='head-neck'|'thorax'|'abdomen-pelvis'|'upper-limb'|'lower-limb'
export interface RegionDef {id:RegionId;key:'headNeck'|'thorax'|'abdomenPelvis'|'upperLimb'|'lowerLimb'}
export const REGIONS:RegionDef[]=[
  {id:'head-neck',key:'headNeck'},
  {id:'thorax',key:'thorax'},
  {id:'abdomen-pelvis',key:'abdomenPelvis'},
  {id:'upper-limb',key:'upperLimb'},
  {id:'lower-limb',key:'lowerLimb'},
]
const HEAD=['skull','cranium','cranial','frontal','parietal','occipital','sphenoid','ethmoid','temporal bone','zygomatic','maxilla','mandible','nasal','nasal septum','orbit','orbital','eyeball','eyelid','palpebrae','lacrimal','nasolacrimal','conjunctiva','iris','retina','lens','vitreous','choroid','sclera','scleral','cornea','corneoscleral','optic','ear','cochlea','vestibule','semicircular','tympanic','ossicle','malleus','incus','stapes','pinna','auricle','tongue','tooth','teeth','face','head','forehead','scalp','brain','cerebrum','cerebellum','brainstem','meninx','meninges','dura','pituitary','neck','larynx','pharynx','thyroid','hyoid','salivary','parotid','submandibular','sublingual','tonsil','mouth','lip','cheek','palate','uvula','gingiva','medulla oblongata','midbrain','pons','thalamus','hypothalamus','basal ganglia','hippocampus','corpus callosum','jugular','carotid','ciliary','fovea','macula','pupil','trabecular','putamen','olfactory','piriform','cortex','chiasma','rectus','ciliaris']
const THORAX=['heart','cardiac','pericard','lung','pulmonary','rib','intercostal','sternum','xiphoid','bronchus','bronchial','bronchopulmonary','pleura','mediastinum','thymus','trachea','diaphragm','aortic arch','nipple','mammary','breast','areola','lactiferous','pectoral','thorax','ventricle','ventricular','atrium','atrial','valve','myocardium','coronary','interstitial lung']
const ABDOMEN=['liver','hepatic','hepato','stomach','gastric','gallbladder','bile duct','biliary','cystic duct','pancrea','splen','kidney','renal','adrenal','suprarenal','ureter','calyx','duodenum','duodenal','intestine','jejunum','ileum','cecum','caecum','colon','appendi','rectum','anal','anus','bladder','urethra','prostate','uterus','uterine','utero','ovary','ovarian','fallopian','mesosalpinx','mesovarium','cervix','vagina','vulva','testis','testicular','epididymis','vas deferens','seminal','scrotum','sacrum','coccyx','hip bone','ilium','iliac','ischium','pubis','pubic','pelvis','pelvic','acetabulum','gluteal','perineum','omentum','meso','peritoneum','porta','portal','celiac','abdominis','oblique','inguinal','spermatic','placenta','umbilical','chorionic','amnion','decidua','falciform','aorta','inferior vena cava','appendicular']
const UPPER=['clavicle','scapula','acromion','coracoid','humerus','radius','radial','ulna','ulnar','carpal','metacarpal','hand','finger','thumb','thenar','hypothenar','arm','forearm','elbow','wrist','shoulder','axilla','axillary','deltoid','brachial','biceps','triceps','olecranon','palmar','subclavian','cephalic vein','basilic','carpi','digitorum','pollicis','brachioradialis','supinator','pronator']
const LOWER=['femur','femoral','patella','patellar','tibia','tibial','fibula','fibular','fibularis','tarsal','metatarsal','foot','toe','leg','thigh','knee','ankle','popliteal','gluteus','quadriceps','hamstring','gastrocnemius','soleus','sartorius','gracilis','vastus','adductor','plantar','calcaneus','talus','heel','saphenous','peroneus','peroneal','hallucis','digiti','cruciate','collateral ligament','rectus femoris']
const REGION_WORDS=['cervical','thoracic','abdominal','lumbar','pelvic']
const REGION_WORD_MAP:Record<string,RegionId>={cervical:'head-neck',thoracic:'thorax',abdominal:'abdomen-pelvis',lumbar:'abdomen-pelvis',pelvic:'abdomen-pelvis'}
const LISTS:{region:RegionId;patterns:string[]}[]=[
  {region:'upper-limb',patterns:UPPER},
  {region:'lower-limb',patterns:LOWER},
  {region:'head-neck',patterns:HEAD},
  {region:'thorax',patterns:THORAX},
  {region:'abdomen-pelvis',patterns:ABDOMEN},
]
const COMPILED=LISTS.map(({region,patterns})=>({region,regexes:patterns.map(p=>new RegExp(`\\b${p.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}`))}))
const WORD_REGEXES=REGION_WORDS.map(p=>({word:p,region:REGION_WORD_MAP[p],regex:new RegExp(`\\b${p}`)}))
function score(name:string){
  let region:RegionId|null=null,best=0
  for(const {region:candidate,regexes} of COMPILED)for(let i=0;i<regexes.length;i++)if(regexes[i].test(name)&&LISTS.find(l=>l.region===candidate)!.patterns[i].length>best){region=candidate;best=LISTS.find(l=>l.region===candidate)!.patterns[i].length}
  if(!region)for(const {word,region:candidate,regex} of WORD_REGEXES)if(regex.test(name)){region=candidate;best=word.length;break}
  return region
}
const SIDE=['left','right','middle']
function stripSide(name:string){
  const words=name.split(/\s+/)
  if(words.length>1&&SIDE.includes(words[0].toLowerCase()))return words.slice(1).join(' ')
  return name
}
/** Classify a part into a body region: the longest matching anatomical name
 * prefix wins, then regional adjectives, and finally position along the
 * body axis for longitudinal structures such as vessels and spinal cord. */
export function classifyRegion(part:Part,landmarks:{neckBase:number;diaphragm:number}):RegionId|null{
  const raw=part.name.toLowerCase().trim(),stripped=stripSide(raw).toLowerCase()
  const byName=score(stripped)||score(raw)
  if(byName)return byName
  const axial=raw.includes('vertebra')||raw.includes('spinal')||raw.includes('intervertebral')||raw.includes('cauda')||raw.includes('aorta')||raw.includes('vena cava')||raw.includes('esophag')||raw.includes('trachea')||raw.includes('nerve')||raw.includes('artery')||raw.includes('vein')
  if(axial){
    const center=(part.bounds[0][1]+part.bounds[1][1])/2
    if(center>landmarks.neckBase)return 'head-neck'
    if(center>landmarks.diaphragm)return 'thorax'
    return 'abdomen-pelvis'
  }
  return null
}
/** Build region → part-id sets for one atlas. Landmarks derive from organ bounds. */
export function buildRegionMap(parts:Part[]):Map<RegionId,Set<string>>{
  const lungs=parts.filter(p=>stripSide(p.name).includes('lung'))
  const diaphragm=parts.find(p=>p.name.toLowerCase().includes('diaphragm'))
  const lungBottom=lungs.length?Math.min(...lungs.map(p=>p.bounds[0][1])):1.2
  const lungTop=lungs.length?Math.max(...lungs.map(p=>p.bounds[1][1])):1.5
  const landmarks={neckBase:lungTop-.03,diaphragm:diaphragm?diaphragm.bounds[0][1]+.04:lungBottom}
  const map=new Map<RegionId,Set<string>>()
  for(const region of REGIONS)map.set(region.id,new Set())
  for(const p of parts){
    const region=classifyRegion(p,landmarks)
    if(region)map.get(region)!.add(p.id)
  }
  return map
}
