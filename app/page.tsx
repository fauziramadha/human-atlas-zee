import {flushSync} from 'react-dom';
import {registerAtlasTools} from './agent-tools';
import {useEffect,useMemo,useRef,useState} from 'react';
import {Activity,ArrowDown,ArrowUp,ArrowUpRight,ChevronRight,Focus,GraduationCap,Info,Languages,Layers3,Lightbulb,Link2,Pause,RotateCcw,RotateCw,ScanLine,Search,Stethoscope,Tags,Camera,X} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {Slider} from '@/components/ui/slider';
import {Switch} from '@/components/ui/switch';
import {Sheet,SheetContent,SheetTitle,SheetDescription} from '@/components/ui/sheet';
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from '@/components/ui/select';
import {Combobox,ComboboxInput,ComboboxContent,ComboboxList,ComboboxItem,ComboboxEmpty} from '@/components/ui/combobox';
import AnatomyScene,{type SceneApi} from './scene';
import {DEFAULT_VISIBLE,SYSTEMS,EXPLANATIONS,explanation,type Atlas,type AnatomySex,type Concept,type SceneState,type SystemId,type View} from './anatomy';
import {CLINICAL,type ClinicalCard} from './knowledge';
import {PATIENT,PATIENT_FALLBACK} from './patient';
import {REGIONS,buildRegionMap,type RegionId} from './regions';
import {encodeShare,decodeShare,type SectionState} from './share';
import {tr,trf,SYSTEM_NAMES,detectLang,type Lang} from './i18n';
import {searchConcepts} from './search';
import {buildQuizBank,makeQuestions,cardFor,displayName,type QuizMix,type QuizQuestion} from './quiz';
const initial:SceneState={explode:0,visible:DEFAULT_VISIBLE,selected:[],isolate:false,view:'three-quarter',rotate:false,reset:0};
const SIDE=/^(left|right|middle) /;
function cardKey(name:string):string|undefined{
  const key=name.toLowerCase();
  if(CLINICAL[key])return key;
  const stripped=key.replace(SIDE,'');
  return CLINICAL[stripped]?stripped:undefined;
}
interface QuizRun{questions:QuizQuestion[];index:number;correct:number;streak:number;answered:null|{right:boolean;skipped?:boolean};hinted:boolean;finished:boolean}
interface ResultItem{concept:Concept;suggested:boolean}
export default function Home(){
 const detailTitle=useRef<HTMLHeadingElement>(null),sceneApi=useRef<SceneApi|null>(null),toastTimer=useRef<number>(0),sexFirst=useRef(true);
 const [shared]=useState(()=>decodeShare(location.hash));
 const [lang,setLang]=useState<Lang>(shared?.lang??detectLang());
 const [sex,setSex]=useState<AnatomySex>(shared?.sex??'male');
 const [atlas,setAtlas]=useState<Atlas|null>(null),[state,setState]=useState<SceneState>(()=>({...initial,visible:shared?.visible??DEFAULT_VISIBLE,explode:shared?.explode??0,view:shared?.view??'three-quarter',isolate:shared?.isolate??false})),[progress,setProgress]=useState(0),[error,setError]=useState(''),[panel,setPanel]=useState<'layers'|'search'|'section'|'quiz'|null>(null),[details,setDetails]=useState(false),[about,setAbout]=useState(false),[query,setQuery]=useState(''),[chosen,setChosen]=useState<Concept|null>(null),[section,setSection]=useState<SectionState|null>(shared?.section??null),[labels,setLabels]=useState(shared?.labels??false),[region,setRegion]=useState<RegionId|null>(shared?.region??null),[toast,setToast]=useState('');
 const [patient,setPatient]=useState(shared?.patient??false);
 const [quizPref,setQuizPref]=useState<QuizMix>('mixed'),[quizLen,setQuizLen]=useState(10),[quiz,setQuiz]=useState<QuizRun|null>(null);
 const [bestScore,setBestScore]=useState(()=>{try{const saved=Number(localStorage.getItem('ha-quiz-best'));return Number.isFinite(saved)&&saved>0?saved:0}catch{return 0}});
 useEffect(()=>{try{localStorage.setItem('ha-lang',lang)}catch{}document.documentElement.lang=lang==='id'?'id':'en';},[lang]);
 useEffect(()=>{const initial=location.hash;const onHash=()=>{if(location.hash!==initial)location.reload();};window.addEventListener('hashchange',onHash);return()=>window.removeEventListener('hashchange',onHash);},[]);
 useEffect(()=>{const key=(e:KeyboardEvent)=>{if(e.key==='/'&&!(e.target instanceof HTMLInputElement)&&!(e.target instanceof HTMLTextAreaElement)){e.preventDefault();setPanel('search');setDetails(false);}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key);},[]);
 const femaleDefault=useMemo(()=>[...DEFAULT_VISIBLE,'integumentary'] as SystemId[],[]);
 useEffect(()=>{const abort=new AbortController();setProgress(0);setError('');setAtlas(null);setChosen(null);setDetails(false);setQuiz(null);const base=sex==='female'?femaleDefault:DEFAULT_VISIBLE;
  if(sexFirst.current){sexFirst.current=false;if(!shared?.visible)setState(s=>({...s,visible:base}));}
  else{setState({...initial,visible:base});setSection(null);setRegion(null);setLabels(false);setPanel(null);}
  fetch(sex==='female'?'/models/atlas-female.json':'/models/atlas.json',{signal:abort.signal}).then(r=>{if(!r.ok)throw new Error('The anatomy catalogue could not be loaded.');return r.json();}).then(data=>setAtlas(data as Atlas)).catch(e=>{if(e.name!=='AbortError')setError(e.message);});return()=>abort.abort();},[sex,femaleDefault,shared]);
 const parts=useMemo(()=>new Map(atlas?.parts.map(p=>[p.id,p])),[atlas]);
 const regionMap=useMemo(()=>atlas?buildRegionMap(atlas.parts):new Map<RegionId,Set<string>>(),[atlas]);
 const counts=useMemo(()=>Object.fromEntries(SYSTEMS.map(s=>[s.id,atlas?.parts.filter(p=>p.system===s.id).length??0])),[atlas]);
 const activeSystems=SYSTEMS.filter(s=>counts[s.id]>0);
 const selectedParts=state.selected.map(id=>parts.get(id)).filter(p=>!!p),selected=selectedParts[0],system=SYSTEMS.find(s=>s.id===selected?.system);
 const regionSet=region?regionMap.get(region):null;
 const visibleCount=atlas?.parts.filter(p=>state.isolate?state.selected.includes(p.id):regionSet?regionSet.has(p.id)&&(state.visible.includes(p.system)||state.selected.includes(p.id)):state.visible.includes(p.system)||state.selected.includes(p.id)).length??0;
 const key=chosen?cardKey(chosen.name):undefined,card=key?CLINICAL[key]:undefined,patientCard=key?PATIENT[key]:undefined;
 const search=useMemo(()=>atlas&&query.trim()?searchConcepts(atlas,query):null,[atlas,query]);
 const results=useMemo(()=>{if(!atlas)return[];const term=query.toLowerCase().trim();if(!term)return ['heart','brain','liver','stomach','spleen','pancreas','urinary bladder','trachea'].map(name=>atlas.concepts.find(c=>c.name.toLowerCase()===name)).filter((x):x is Concept=>!!x);return(search?.hits??[]).slice(0,80);},[atlas,query,search]);
 const suggestions=useMemo(()=>search&&search.hits.length===0?search.suggestions:[],[search]);
 const searchItems=useMemo<ResultItem[]>(()=>[...suggestions.map(c=>({concept:c,suggested:true})),...results.map(c=>({concept:c,suggested:false}))],[results,suggestions]);
 const quizActive=!!quiz&&!quiz.finished,question=quizActive?quiz.questions[quiz.index]:null;
 const quizBank=useMemo(()=>atlas?buildQuizBank(atlas,state.visible):[],[atlas,state.visible]);
 const quizSystems=useMemo(()=>new Set(quizBank.map(b=>b.system)).size,[quizBank]);
 const choose=(c:Concept)=>{if(quizActive)exitQuiz();setChosen(c);setState(s=>({...s,selected:c.elements,isolate:false,rotate:false}));setDetails(true);setPanel(null);};
 useEffect(()=>{if(!atlas)return;return registerAtlasTools(atlas,c=>flushSync(()=>choose(c)));},[atlas]);
 useEffect(()=>{if(!atlas||!shared)return;const concept=shared.concept?atlas.concepts.find(c=>c.id===shared.concept):null;if(concept){setChosen(concept);setState(s=>({...s,selected:concept.elements,isolate:shared.isolate??false,rotate:false}));setDetails(true);}if(shared.camera)sceneApi.current?.applyCamera(shared.camera);},[atlas,shared]);
 const choosePart=(id:string)=>{const p=parts.get(id);if(!p)return;setChosen({id:p.conceptId,name:p.name,elements:[id]});setState(s=>({...s,selected:[id],isolate:false,rotate:false}));setDetails(true);setPanel(null);};
 const handleSceneSelect=(id:string)=>{
  if(quizActive){
   if(!quiz?.answered&&question&&question.kind==='find'){const part=parts.get(id);applyAnswer(!!part&&(part.conceptId===question.concept.id||question.concept.elements.includes(part.id)),false);}
   return;
  }
  choosePart(id);
 };
 const toggle=(id:SystemId)=>{if(quizActive)exitQuiz();setDetails(false);setState(s=>({...s,selected:[],isolate:false,visible:s.visible.includes(id)?s.visible.filter(x=>x!==id):[...s.visible,id]}));};
 const reset=()=>{setState(s=>({...initial,visible:sex==='female'?femaleDefault:DEFAULT_VISIBLE,reset:s.reset+1}));setChosen(null);setDetails(false);setPanel(null);setSection(null);setRegion(null);setLabels(false);if(quizActive)exitQuiz();};
 const openPanel=(next:'layers'|'search'|'section'|'quiz')=>{setDetails(false);if(quizActive&&next!=='quiz')return setPanel(next);setPanel(p=>p===next?null:next);};
 const showToast=(message:string)=>{setToast(message);clearTimeout(toastTimer.current);toastTimer.current=window.setTimeout(()=>setToast(''),2200);};
 const toggleSection=()=>{if(section){setSection(null);}else{setSection({plane:'axial',position:.45,depth:.3,flip:false});setPanel('section');if(state.visible.includes('integumentary'))setState(s=>({...s,visible:s.visible.filter(x=>x!=='integumentary'),isolate:false}));}};
 const toggleRegion=(id:RegionId)=>{if(quizActive)exitQuiz();setDetails(false);setRegion(r=>r===id?null:id);setState(s=>({...s,isolate:false,explode:0,rotate:false}));};
 const applyPreset=(visible:SystemId[])=>{if(quizActive)exitQuiz();setRegion(null);setState(s=>({...s,selected:[],isolate:false,visible}));};
 // Quiz flow
 const startQuiz=()=>{
  if(!atlas||quizBank.length<4)return;
  const questions=makeQuestions(quizBank,quizLen,quizPref);
  setQuiz({questions,index:0,correct:0,streak:0,answered:null,hinted:false,finished:false});
  setChosen(null);setDetails(false);setSection(null);setRegion(null);setLabels(false);setPanel('quiz');
  setState(s=>({...s,selected:[],isolate:false,explode:0,rotate:false,reset:s.reset+1}));
 };
 const exitQuiz=()=>{setQuiz(null);setState(s=>({...s,selected:[],isolate:false}));};
 const applyAnswer=(right:boolean,skipped:boolean)=>{
  if(!quiz||quiz.answered||!question)return;
  setQuiz({...quiz,correct:quiz.correct+(right?1:0),streak:right?quiz.streak+1:0,answered:{right,skipped}});
  setState(s=>({...s,selected:question.concept.elements,isolate:question.kind==='name',rotate:false}));
 };
 const answerName=(option:Concept)=>applyAnswer(option.id===question?.concept.id,false);
 const skipQuestion=()=>applyAnswer(false,true);
 const hintQuestion=()=>{if(!quiz||quiz.answered||!question||quiz.hinted)return;setQuiz({...quiz,hinted:true});setState(s=>({...s,selected:question.concept.elements,isolate:true,rotate:false}));showToast(tr(lang,'quizHintToast'));};
 const nextQuestion=()=>{
  if(!quiz)return;
  if(quiz.index+1>=quiz.questions.length){
   const percent=Math.round(quiz.correct/quiz.questions.length*100);
   try{const saved=Number(localStorage.getItem('ha-quiz-best'));const best=Number.isFinite(saved)?saved:0;if(percent>best){localStorage.setItem('ha-quiz-best',String(percent));setBestScore(percent);}}catch{}
   setQuiz({...quiz,finished:true});setState(s=>({...s,selected:[],isolate:false}));setDetails(false);
  }else setQuiz({...quiz,index:quiz.index+1,answered:null,hinted:false});
 };
 const shareScore=async()=>{
  if(!quiz)return;
  const total=quiz.questions.length,score=quiz.correct,percent=Math.round(score/total*100);
  const text=lang==='id'?`Saya menjawab ${score}/${total} (${percent}%) di kuis anatomi Human Atlas`:`I scored ${score}/${total} (${percent}%) on the Human Atlas anatomy quiz`;
  try{await navigator.clipboard.writeText(text);}catch{}
  showToast(tr(lang,'quizScoreCopied'));
 };
 useEffect(()=>{
  if(!question)return;
  if(question.kind==='name')setState(s=>({...s,selected:question.concept.elements,isolate:true,rotate:false}));
  else setState(s=>({...s,selected:[],isolate:false,rotate:false}));
 },[question]);
 const shareView=async()=>{
  const camera=sceneApi.current?.getCamera()??null;
  const url=encodeShare({v:1,lang,sex,visible:state.visible,concept:chosen?.id??'',explode:state.explode,view:state.view,isolate:state.isolate,labels,patient,region,section,camera});
  try{await navigator.clipboard.writeText(url);showToast(tr(lang,'linkCopied'));}
  catch{const hash=url.split('#')[1];if(hash)location.hash=hash;showToast(tr(lang,'linkCopied'));}
 };
 const exportImage=()=>{
  const url=sceneApi.current?.capture();if(!url)return;
  const image=new Image();
  image.onload=()=>{
   const pad=Math.round(image.width*.03),bar=Math.round(image.width*.1);
   const canvas=document.createElement('canvas');canvas.width=image.width+pad*2;canvas.height=image.height+pad*2+bar;
   const context=canvas.getContext('2d');if(!context)return;
   context.fillStyle='#f3f4f4';context.fillRect(0,0,canvas.width,canvas.height);
   context.drawImage(image,pad,pad);
   const name=chosen?.name??(region?tr(lang,REGIONS.find(r=>r.id===region)!.key):sex==='female'?tr(lang,'femaleAnatomy'):tr(lang,'maleAnatomy'));
   const source=sex==='female'?'Human Reference Atlas (CC BY 4.0)':'BodyParts3D © DBCLS (CC BY 4.0)';
   const titleSize=Math.max(15,Math.round(canvas.width*.017)),metaSize=Math.max(10,Math.round(canvas.width*.011));
   context.fillStyle='#263b48';context.font=`600 ${titleSize}px Inter,system-ui,sans-serif`;
   context.fillText(`Human Atlas — ${name}`,pad,image.height+pad*2+titleSize+6);
   context.fillStyle='#7c8894';context.font=`${metaSize}px Inter,system-ui,sans-serif`;
   context.fillText(`${source} · ${location.host}${location.pathname}`,pad,image.height+pad*2+titleSize+metaSize+18);
   canvas.toBlob(blob=>{if(!blob)return;const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download=`human-atlas-${name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}.png`;link.click();setTimeout(()=>URL.revokeObjectURL(link.href),4000);showToast(tr(lang,'imageSaved'));},'image/png');
  };
  image.src=url;
 };
 const orientation=section?.plane==='coronal'?tr(lang,'anteriorPosterior'):section?.plane==='sagittal'?tr(lang,'leftRight'):tr(lang,'superiorInferior');
 const percent=quiz?Math.round(quiz.correct/quiz.questions.length*100):0;
 const clinicalDetail=card&&<><dl className="clinical">{card.bloodSupply&&<div className="clinical-row"><dt>{tr(lang,'bloodSupply')}</dt><dd>{card.bloodSupply[lang]}</dd></div>}{card.innervation&&<div className="clinical-row"><dt>{tr(lang,'innervation')}</dt><dd>{card.innervation[lang]}</dd></div>}{card.drainage&&<div className="clinical-row"><dt>{tr(lang,'drainage')}</dt><dd>{card.drainage[lang]}</dd></div>}</dl>
   {card.conditions.length>0&&<div className="condition-list"><h3>{tr(lang,'conditions')}</h3>{card.conditions.map((condition,index)=><div className="condition" key={index}><strong>{condition.name[lang]}</strong><span>{condition.detail[lang]}</span></div>)}</div>}
   {card.clinical&&<div className="clinical-note"><h3>{tr(lang,'clinicalNotes')}</h3><p>{card.clinical[lang]}</p></div>}</>;
 return <main className="studio">
  {atlas&&<AnatomyScene atlas={atlas} state={{...state,inspectorOpen:details&&selectedParts.length>0}} section={section} labels={labels} region={region} lang={lang} regionMap={regionMap} quizMode={quizActive} onSelect={handleSceneSelect} onProgress={n=>{setProgress(n);if(n===100)setError('');}} onError={setError} onApi={api=>{sceneApi.current=api}}/>}
  <div className="vignette"/>
  <header className="identity"><div className="eyebrow"><span className="status-dot"/> {tr(lang,'eyebrow')}</div><h1>Human Atlas<Badge variant="outline" className="edition">3D</Badge></h1><div className="identity-meta">{atlas?atlas.parts.length.toLocaleString():sex==='female'?'888':'2,234'} {tr(lang,'pieces')} <span>·</span> {sex==='female'?'Human Reference Atlas':'BodyParts3D'}</div><div className="anatomy-choice"><Select value={sex} onValueChange={value=>{if(value==='male'||value==='female')setSex(value);}} items={[{value:'male',label:tr(lang,'maleAnatomy')},{value:'female',label:tr(lang,'femaleAnatomy')}]}><SelectTrigger aria-label={tr(lang,'chooseSex')}><SelectValue/></SelectTrigger><SelectContent className="anatomy-choice-menu"><SelectItem value="male">{tr(lang,'maleAnatomy')}</SelectItem><SelectItem value="female">{tr(lang,'femaleAnatomy')}</SelectItem></SelectContent></Select></div></header>
  <nav className="top-actions" aria-label="Explorer panels"><Button variant="ghost" className={panel==='search'?'active':''} onClick={()=>openPanel('search')} aria-label={tr(lang,'search')}><Search size={18}/><span>{tr(lang,'findStructure')}</span><kbd>/</kbd></Button><Button variant="ghost" className={`icon-button ${section?'active':''}`} aria-pressed={!!section} aria-label={tr(lang,'sectionToggle')} title={tr(lang,'section')} onClick={toggleSection}><ScanLine size={18}/></Button><Button variant="ghost" className={`icon-button ${labels?'active':''}`} aria-pressed={labels} disabled={quizActive} aria-label={tr(lang,'labelsToggle')} title={tr(lang,'labels')} onClick={()=>setLabels(l=>!l)}><Tags size={18}/></Button><Button variant="ghost" className={`icon-button ${panel==='quiz'||quizActive?'active':''}`} aria-pressed={quizActive} aria-label={tr(lang,'quizToggle')} title={tr(lang,'quiz')} onClick={()=>openPanel('quiz')}><GraduationCap size={18}/></Button><Button variant="ghost" className={`icon-button ${patient?'active':''}`} aria-pressed={patient} aria-label={tr(lang,'patientToggle')} title={tr(lang,'patientMode')} onClick={()=>setPatient(p=>!p)}><Stethoscope size={18}/></Button><Button variant="ghost" className="icon-button" aria-label={tr(lang,'captureToggle')} title={tr(lang,'capture')} onClick={exportImage}><Camera size={18}/></Button><Button variant="ghost" className="icon-button lang-button" aria-label={tr(lang,'languageToggle')} title={tr(lang,'language')} onClick={()=>setLang(l=>l==='en'?'id':'en')}><Languages size={16}/><span>{lang.toUpperCase()}</span></Button><Button variant="ghost" className="icon-button" aria-label={tr(lang,'about')} onClick={()=>{setDetails(false);setPanel(null);setAbout(true);}}><Info size={18}/></Button></nav>
  <section className={`layers-panel glass ${panel==='layers'?'mobile-open':''}`} aria-label="Anatomical layers">
   <div className="panel-heading"><span>{tr(lang,'systems')}</span><Button variant="ghost" className="mobile-only icon-button" onClick={()=>setPanel(null)} aria-label={tr(lang,'closeSystems')}><X size={18}/></Button><Badge variant="secondary" className="desktop-only small-number">{activeSystems.length}</Badge></div>
   <div className="layer-presets"><Button variant="ghost" aria-pressed={!region&&activeSystems.every(x=>state.visible.includes(x.id))} onClick={()=>applyPreset(activeSystems.map(x=>x.id))}>{tr(lang,'all')}</Button><Button variant="ghost" aria-pressed={!region&&state.visible.length===1&&state.visible[0]==='skeletal'} onClick={()=>applyPreset(['skeletal'])}>{tr(lang,'skeleton')}</Button><Button variant="ghost" aria-pressed={!region&&state.visible.length===6&&['cardiac','respiratory','digestive','urinary','endocrine','reproductive'].every(id=>state.visible.includes(id as SystemId))} onClick={()=>applyPreset(['cardiac','respiratory','digestive','urinary','endocrine','reproductive'])}>{tr(lang,'organs')}</Button></div>
   <div className="region-block"><div className="region-heading">{tr(lang,'regions')}</div><div className="region-chips">{REGIONS.map(r=><Button variant="ghost" key={r.id} className={region===r.id?'active':''} aria-pressed={region===r.id} title={region===r.id?tr(lang,'clearRegion'):''} onClick={()=>toggleRegion(r.id)}>{tr(lang,r.key)}</Button>)}</div></div>
   <div className="system-list">{activeSystems.map(s=><div className={`system-row ${state.visible.includes(s.id)?'enabled':''}`} key={s.id}><Button variant="ghost" className="system-name" title={`${tr(lang,'showOnly')} ${SYSTEM_NAMES[s.id][lang].toLowerCase()}`} onClick={()=>{setRegion(null);setState(v=>({...v,visible:[s.id],isolate:false,selected:[]}));}}><span className="system-dot" style={{background:s.color}}/>{SYSTEM_NAMES[s.id][lang]}<span className="system-count">{counts[s.id]}</span></Button><Switch checked={state.visible.includes(s.id)} onCheckedChange={()=>toggle(s.id)} aria-label={`${tr(lang,'showOnly')} ${SYSTEM_NAMES[s.id][lang].toLowerCase()}`} /></div>)}</div>
   <div className="panel-foot"><span>{visibleCount.toLocaleString()} {tr(lang,'piecesVisible')}</span><Button variant="ghost" onClick={()=>{setRegion(null);setState(s=>({...s,visible:[],selected:[],isolate:false}));}}>{tr(lang,'hideAll')}</Button></div>
  </section>
  {panel==='search'&&<section className="search-panel glass" aria-label={tr(lang,'search')}><div className="panel-heading"><span>{tr(lang,'findStructure')}</span><Button variant="ghost" className="icon-button" onClick={()=>setPanel(null)} aria-label={tr(lang,'search')}><X size={18}/></Button></div><Combobox<ResultItem> items={searchItems} value={null} onValueChange={value=>{if(value)choose(value.concept);}} inputValue={query} onInputValueChange={setQuery} itemToStringLabel={r=>r.concept.name} filter={null} open onOpenChange={open=>{if(!open)setPanel(null);}}><ComboboxInput autoFocus placeholder={tr(lang,'searchPlaceholder')} aria-label={tr(lang,'searchLabel')} showTrigger={false}/><ComboboxContent className="anatomy-search-results"><ComboboxEmpty>{tr(lang,'noMatches')}</ComboboxEmpty><ComboboxList>{(r:ResultItem)=><ComboboxItem key={r.concept.id} value={r}><span className="search-result-name">{r.concept.name}</span>{r.suggested?<span className="search-suggest-chip">{tr(lang,'didYouMean')}</span>:<span className="small-number">{r.concept.elements.length}</span>}</ComboboxItem>}</ComboboxList></ComboboxContent></Combobox><p className="search-note">{query.trim()?tr(lang,'smartSearchNote'):tr(lang,'startNote')}</p></section>}
  {panel==='section'&&<section className="section-panel glass" aria-label={tr(lang,'section')}><div className="panel-heading"><span>{tr(lang,'section')}</span><Button variant="ghost" className="icon-button" onClick={()=>setPanel(null)} aria-label={tr(lang,'closeSection')}><X size={18}/></Button></div><div className="segmented" role="radiogroup" aria-label="Section plane">{(['axial','coronal','sagittal'] as const).map(p=><Button variant="ghost" key={p} role="radio" aria-checked={section?.plane===p} className={section?.plane===p?'active':''} onClick={()=>setSection(s=>s?{...s,plane:p}:{plane:p,position:.45,depth:.3,flip:false})}>{tr(lang,p)}</Button>)}</div><div className="section-slider"><div className="section-slider-head"><label htmlFor="section-position">{tr(lang,'position')}</label><span>{orientation}</span></div><Slider id="section-position" min={0} max={100} step={1} value={[Math.round((section?.position??.45)*100)]} onValueChange={v=>setSection(s=>s?{...s,position:(Array.isArray(v)?v[0]:v)/100}:s)}/></div><div className="section-slider"><div className="section-slider-head"><label htmlFor="section-depth">{tr(lang,'thickness')}</label><span className="small-number">{Math.round((section?.depth??0)*100)}%</span></div><Slider id="section-depth" min={0} max={100} step={1} value={[Math.round((section?.depth??0)*100)]} onValueChange={v=>setSection(s=>s?{...s,depth:(Array.isArray(v)?v[0]:v)/100}:s)}/></div><div className="section-row"><Button variant="ghost" className={section?.flip?'active':''} aria-pressed={section?.flip??false} onClick={()=>setSection(s=>s?{...s,flip:!s.flip}:s)}>{section?.flip?<ArrowUp size={15}/>:<ArrowDown size={15}/>}{tr(lang,'flip')}</Button><Button variant="ghost" className={section?'active':''} aria-pressed={!!section} onClick={()=>setSection(s=>s?null:{plane:'axial',position:.45,depth:.3,flip:false})}>{section?tr(lang,'on'):tr(lang,'off')}</Button></div><p className="search-note">{tr(lang,'sectionHint')}</p>{state.visible.includes('integumentary')&&<div className="skin-note"><span>{tr(lang,'skinSuggestion')}</span><Button variant="ghost" onClick={()=>setState(s=>({...s,visible:s.visible.filter(x=>x!=='integumentary')}))}>{tr(lang,'hideSkin')}</Button></div>}</section>}
  {panel==='quiz'&&<section className="quiz-panel glass" aria-label={tr(lang,'quiz')}><div className="panel-heading"><span>{tr(lang,'quiz')}</span><Button variant="ghost" className="icon-button" onClick={()=>{if(quizActive)exitQuiz();setPanel(null);}} aria-label={tr(lang,'quiz')}><X size={18}/></Button></div>
   {!quiz&&<><p className="quiz-intro">{tr(lang,'quizIntro')}</p>
    <div className="quiz-field"><div className="quiz-label">{tr(lang,'quizStyle')}</div><div className="segmented" role="radiogroup" aria-label={tr(lang,'quizStyle')}>{(['find','name','mixed'] as const).map(m=><Button variant="ghost" key={m} role="radio" aria-checked={quizPref===m} className={quizPref===m?'active':''} onClick={()=>setQuizPref(m)}>{tr(lang,m==='find'?'quizFind':m==='name'?'quizName':'quizMixed')}</Button>)}</div></div>
    <div className="quiz-field"><div className="quiz-label">{tr(lang,'quizLength')}</div><div className="segmented" role="radiogroup" aria-label={tr(lang,'quizLength')}>{[5,10,15].map(n=><Button variant="ghost" key={n} role="radio" aria-checked={quizLen===n} className={quizLen===n?'active':''} onClick={()=>setQuizLen(n)}>{n}</Button>)}</div></div>
    {quizBank.length>=4?<><p className="quiz-bank-note">{trf(lang,'quizBankNote',{n:quizBank.length,m:quizSystems})}</p>{bestScore>0&&<p className="quiz-bank-note">{trf(lang,'quizBest',{n:bestScore})}</p>}<Button className="primary-action quiz-start" onClick={startQuiz}><GraduationCap size={16}/>{tr(lang,'quizStart')}</Button><p className="quiz-labels-note">{tr(lang,'quizLabelsNote')}</p></>:<div className="quiz-too-few"><p>{tr(lang,'quizTooFew')}</p><Button variant="ghost" onClick={()=>applyPreset(activeSystems.map(x=>x.id))}>{tr(lang,'quizShowAll')}</Button></div>}
   </>}
   {quizActive&&question&&<><div className="quiz-progress"><span>{trf(lang,'quizQuestionOf',{a:quiz.index+1,b:quiz.questions.length})}</span><span>{tr(lang,'quizScore')}: <b>{quiz.correct}</b>{quiz.streak>=2&&<span className="quiz-streak"> · {quiz.streak} {tr(lang,'quizStreak')}</span>}</span></div>
    <p className="quiz-prompt">{question.kind==='find'?trf(lang,'quizFindPrompt',{name:displayName(question.concept,lang)}):tr(lang,'quizNamePrompt')}</p>
    {question.kind==='name'&&!quiz.answered&&<div className="quiz-options">{question.options.map(option=><Button variant="ghost" key={option.id} className="quiz-option" onClick={()=>answerName(option)}>{displayName(option,lang)}</Button>)}</div>}
    {question.kind==='find'&&!quiz.answered&&<div className="quiz-actions"><Button variant="ghost" disabled={quiz.hinted} onClick={hintQuestion}><Lightbulb size={14}/>{tr(lang,'quizHint')}</Button><Button variant="ghost" onClick={skipQuestion}>{tr(lang,'quizSkip')}</Button></div>}
    {quiz.answered&&<><div className={`quiz-feedback ${quiz.answered.right?'correct':'wrong'}`}><strong>{quiz.answered.right?tr(lang,'quizCorrect'):quiz.answered.skipped?tr(lang,'quizSkipped'):tr(lang,'quizWrong')}</strong>{!quiz.answered.right&&<p>{tr(lang,'quizAnswerWas')} <b>{displayName(question.concept,lang)}</b></p>}{cardFor(question.concept)&&<p className="quiz-fact">{cardFor(question.concept)!.overview[lang]}</p>}</div><Button className="primary-action quiz-next" onClick={nextQuestion}>{tr(lang,'quizNext')}<ChevronRight size={15}/></Button></>}
   </>}
   {quiz&&quiz.finished&&<><div className="quiz-results"><div className="quiz-results-score">{quiz.correct}<span>/{quiz.questions.length}</span></div><p className="quiz-results-pct">{percent}%</p><p className="quiz-results-msg">{percent>=80?tr(lang,'quizGreat'):percent>=50?tr(lang,'quizGood'):tr(lang,'quizKeep')}</p>{bestScore>0&&<p className="quiz-bank-note">{trf(lang,'quizBest',{n:bestScore})}</p>}</div><div className="quiz-results-actions"><Button className="primary-action" onClick={startQuiz}><RotateCw size={15}/>{tr(lang,'quizRestart')}</Button><Button variant="ghost" onClick={shareScore}><Link2 size={14}/>{tr(lang,'quizShare')}</Button><Button variant="ghost" onClick={exitQuiz}>{tr(lang,'quizExit')}</Button></div></>}
  </section>}
  <nav className="view-controls glass" aria-label="Camera controls">{(['three-quarter','front','side','back'] as View[]).map((v,i)=><Button variant="ghost" key={v} className={state.view===v?'active':''} aria-pressed={state.view===v} disabled={state.explode>.8&&v!=='front'} onClick={()=>setState(s=>({...s,view:v,reset:s.reset+1,rotate:false}))} title={`${v} view`} aria-label={`${v} view`}><span>{['¾','F','S','B'][i]}</span></Button>)}<i/><Button variant="ghost" disabled={state.explode>=.4} aria-label={state.rotate?tr(lang,'pauseRotation'):tr(lang,'rotate')} title={tr(lang,'rotate')} className={state.rotate?'active':''} onClick={()=>setState(s=>({...s,rotate:!s.rotate}))}>{state.rotate?<Pause size={17}/>:<RotateCw size={18}/>}</Button><Button variant="ghost" aria-label={tr(lang,'resetView')} title={tr(lang,'reset')} onClick={reset}><RotateCcw size={17}/></Button></nav>
  <div className="scene-caption"><span className="caption-line"/><span>{quizActive?tr(lang,'quizCaption'):state.isolate?(chosen?.name??tr(lang,'selectedStructure')):state.explode>.95?tr(lang,'inventory'):state.explode>.05?tr(lang,'separated'):region?tr(lang,REGIONS.find(r=>r.id===region)!.key):sex==='female'?tr(lang,'femaleRef'):tr(lang,'adultMale')}</span><span className="caption-line"/></div>
  <div className="bottom-dock glass"><Button variant="ghost" className="mobile-only dock-layers" onClick={()=>openPanel('layers')} aria-label={tr(lang,'openSystems')}><Layers3 size={20}/><span>{tr(lang,'systems')}</span></Button><div className="explode-control"><div className="explode-label"><label id="explode-label">{tr(lang,'explode')}</label><output>{Math.round(state.explode*100)}<span>%</span></output></div><Slider aria-labelledby="explode-label" min={0} max={100} step={1} value={[state.explode*100]} onValueChange={v=>setState(s=>({...s,explode:(Array.isArray(v)?v[0]:v)/100,view:(Array.isArray(v)?v[0]:v)>80?'front':s.view,rotate:false}))}/><div className="slider-endpoints"><span>{tr(lang,'assembled')}</span><span>{tr(lang,'everyPiece')}</span></div></div><Button variant="ghost" className="dock-reset" onClick={reset} aria-label={tr(lang,'assembleReset')}><RotateCcw size={18}/><span>{tr(lang,'reset')}</span></Button></div>
  <footer className="studio-footer"><span>{state.explode>.8?tr(lang,'dragPan'):tr(lang,'dragOrbit')} <b>·</b> {tr(lang,'pinchZoom')} <b>·</b> {tr(lang,'tapInspect')}</span><div className="footer-actions"><Button variant="ghost" onClick={shareView}><Link2 size={12}/>{tr(lang,'shareView')}</Button><Button variant="ghost" onClick={()=>{setDetails(false);setPanel(null);setAbout(true);}}>{tr(lang,'sourceCredits')} <ArrowUpRight size={12}/></Button></div></footer>
  {progress<100&&!error&&<div className="loading glass" role="status"><Activity size={18}/><div><strong>{tr(lang,'preparing')}</strong><span>{progress}% · {tr(lang,'loadingPieces')} {atlas?.parts.length.toLocaleString()??(sex==='female'?'888':'2,234')} {tr(lang,'pieces')}</span><div className="loading-track"><i style={{width:`${progress}%`}}/></div></div></div>}
  {error&&<div className="loading glass error" role="alert"><p>{error}</p><Button variant="ghost" onClick={()=>location.reload()}>{tr(lang,'reloadViewer')}</Button></div>}
  {toast&&<div className="toast glass" role="status">{toast}</div>}
  <Sheet open={details&&selectedParts.length>0} modal={false} disablePointerDismissal onOpenChange={setDetails}><SheetContent initialFocus={detailTitle} className={`detail-sheet glass ${state.isolate?'is-isolated':''}`} showCloseButton={true}><div className="detail-header"><div className="detail-accent" style={{background:system?.color}}/><div className="eyebrow">{system?SYSTEM_NAMES[system.id][lang]:tr(lang,'systems')}</div><SheetTitle ref={detailTitle} tabIndex={-1} className="structure-title">{chosen?.name}{lang==='id'&&card&&card.nameId.toLowerCase()!==chosen?.name.toLowerCase()?` · ${card.nameId}`:''}</SheetTitle></div><div className="detail-scroll" key={`${chosen?.id}-${state.isolate}`}><SheetDescription className="structure-description">{chosen&&selected?(card?card.overview[lang]:explanation(chosen.name,selected.system)):''}</SheetDescription>{chosen&&!card&&!EXPLANATIONS[chosen.name.toLowerCase()]&&<span className="context-note">{tr(lang,'systemOverview')}</span>}
   {patient&&patientCard?<><div className="knowledge-divider"/><div className="patient-block"><h3>{tr(lang,'forPatients')}</h3><div className="patient-section"><h4>{tr(lang,'patientAbout')}</h4><p>{patientCard.about[lang]}</p></div><div className="patient-section"><h4>{tr(lang,'patientSymptoms')}</h4><ul className="patient-list">{patientCard.symptoms.map((item,index)=><li key={index}>{item[lang]}</li>)}</ul></div><div className="patient-section"><h4>{tr(lang,'patientAsk')}</h4><ul className="patient-list">{patientCard.ask.map((item,index)=><li key={index}>{item[lang]}</li>)}</ul></div>{patientCard.urgency&&<div className="patient-urgent"><span>{patientCard.urgency[lang]}</span></div>}<p className="knowledge-source">{tr(lang,'patientDisclaimer')}</p></div>{card&&<details className="clinical-details"><summary>{tr(lang,'clinicalDetails')}</summary><div className="clinical-details-body">{clinicalDetail}<p className="knowledge-source">{tr(lang,'knowledgeSource')}</p></div></details>}</>:<>{card&&patient&&!patientCard&&<><div className="knowledge-divider"/><p className="context-note patient-fallback">{PATIENT_FALLBACK[lang]}</p></>}
   {card&&<><div className="knowledge-divider"/><dl className="clinical">{card.bloodSupply&&<div className="clinical-row"><dt>{tr(lang,'bloodSupply')}</dt><dd>{card.bloodSupply[lang]}</dd></div>}{card.innervation&&<div className="clinical-row"><dt>{tr(lang,'innervation')}</dt><dd>{card.innervation[lang]}</dd></div>}{card.drainage&&<div className="clinical-row"><dt>{tr(lang,'drainage')}</dt><dd>{card.drainage[lang]}</dd></div>}</dl>
   {card.conditions.length>0&&<div className="condition-list"><h3>{tr(lang,'conditions')}</h3>{card.conditions.map((condition,index)=><div className="condition" key={index}><strong>{condition.name[lang]}</strong><span>{condition.detail[lang]}</span></div>)}</div>}
   {card.clinical&&<div className="clinical-note"><h3>{tr(lang,'clinicalNotes')}</h3><p>{card.clinical[lang]}</p></div>}
   <p className="knowledge-source">{tr(lang,'knowledgeSource')}</p></>}</>}
   <div className="structure-meta"><span>{tr(lang,'atlasReference')}<strong>{chosen?.id}</strong></span><span>{tr(lang,'selectedPieces')}<strong>{state.selected.length.toLocaleString()}</strong></span></div>{selectedParts.length>1&&<div className="member-list"><h3>{tr(lang,'includedStructures')}</h3>{selectedParts.slice(0,50).map(p=><Button variant="ghost" key={p.id} onClick={()=>choosePart(p.id)}><span>{p.name}</span><ChevronRight size={14}/></Button>)}{selectedParts.length>50&&<p>{tr(lang,'and')} {selectedParts.length-50} {tr(lang,'morePieces')}</p>}</div>}<a className="source-link" href={sex==='female'?'https://doi.org/10.48539/HBM352.BTSQ.586':'https://lifesciencedb.jp/bp3d/'} target="_blank" rel="noreferrer">{tr(lang,'viewSource')} <ArrowUpRight size={14}/></a></div><div className="detail-actions"><Button className={`primary-action ${state.isolate?'active':''}`} onClick={()=>setState(s=>({...s,isolate:!s.isolate,explode:0}))}><Focus size={18}/>{state.isolate?tr(lang,'showSurrounding'):tr(lang,'isolate')}<ChevronRight size={16}/></Button><Button variant="ghost" className="secondary-action" onClick={()=>{setState(s=>({...s,selected:[],isolate:false}));setDetails(false);}}>{tr(lang,'clearSelection')}</Button></div></SheetContent></Sheet>
  <Sheet open={about} onOpenChange={setAbout}><SheetContent className="about-sheet glass"><div className="eyebrow">SOURCE & SCOPE</div><SheetTitle className="structure-title">{tr(lang,'aboutTitle')}</SheetTitle><SheetDescription>{tr(lang,'aboutDescription')}</SheetDescription><div className="about-copy"><p><strong>{tr(lang,'aboutMale')}</strong><br/>{tr(lang,'aboutMaleDetail')}</p><p><strong>{tr(lang,'aboutFemale')}</strong><br/>{tr(lang,'aboutFemaleDetail')}</p><p>{tr(lang,'aboutCoverage')}</p><p>{tr(lang,'aboutColors')}</p><h3>{tr(lang,'femaleSource')}</h3><p>Kristen Browne and Heidi Schlehlein, Human Reference Atlas / HuBMAP, 3D Reference Organ Set for Female v1.5 (2023). CC BY 4.0.</p><a href="https://doi.org/10.48539/HBM352.BTSQ.586" target="_blank" rel="noreferrer">{tr(lang,'femaleRefCollection')} <ArrowUpRight size={14}/></a><h3>{tr(lang,'maleSource')}</h3><p>BodyParts3D, © The Database Center for Life Science licensed under CC Attribution 4.0 International.</p><a href="https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html" target="_blank" rel="noreferrer">{tr(lang,'datasetLicense')} <ArrowUpRight size={14}/></a><a href="https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html" target="_blank" rel="noreferrer">{tr(lang,'originalGeometry')} <ArrowUpRight size={14}/></a><a href="https://academic.oup.com/nar/article/37/suppl_1/D782/1000752" target="_blank" rel="noreferrer">{tr(lang,'readPublication')} <ArrowUpRight size={14}/></a></div></SheetContent></Sheet>
 </main>;
}
