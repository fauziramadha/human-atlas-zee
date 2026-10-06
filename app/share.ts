import type {SystemId,View} from './anatomy'
import type {RegionId} from './regions'
import type {Lang} from './i18n'
export interface SectionState {plane:'axial'|'coronal'|'sagittal';position:number;depth:number;flip:boolean}
export interface CameraState {position:[number,number,number];target:[number,number,number]}
export interface ShareState {
  v:1
  lang:Lang
  sex:'male'|'female'
  visible:SystemId[]
  concept:string
  explode:number
  view:View
  isolate:boolean
  labels:boolean
  region:RegionId|null
  section:SectionState|null
  camera:CameraState|null
}
const KEYS:Record<keyof ShareState,string>={v:'v',lang:'l',sex:'g',visible:'sy',concept:'c',explode:'x',view:'w',isolate:'i',labels:'lb',region:'r',section:'ct',camera:'cam'}
function round(n:number){return Math.round(n*1000)/1000}
export function encodeShare(state:ShareState):string{
  const params=new URLSearchParams()
  params.set('v','1')
  params.set('l',state.lang)
  params.set('g',state.sex)
  if(state.visible.length)params.set('sy',state.visible.join(','))
  if(state.concept)params.set('c',state.concept)
  if(state.explode>0.001)params.set('x',String(round(state.explode)))
  if(state.view!=='three-quarter')params.set('w',state.view)
  if(state.isolate)params.set('i','1')
  if(state.labels)params.set('lb','1')
  if(state.region)params.set('r',state.region)
  if(state.section)params.set('ct',[state.section.plane,Math.round(state.section.position*100),Math.round(state.section.depth*100),state.section.flip?1:0].join(','))
  if(state.camera)params.set('cam',state.camera.position.map(round).concat(state.camera.target.map(round)).join(','))
  return `${location.origin}${location.pathname}#${params.toString()}`
}
const SEXES=['male','female']
const LANGS=['en','id']
const VIEWS=['three-quarter','front','side','back']
const PLANES=['axial','coronal','sagittal']
const REGIONS=['head-neck','thorax','abdomen-pelvis','upper-limb','lower-limb']
const SYSTEM_IDS=['skeletal','muscular','arterial','venous','nervous','digestive','respiratory','urinary','reproductive','lymphatic','endocrine','integumentary','connective','sensory','cardiac','pregnancy']
function number(value:string|null){if(value==null)return null;const n=Number(value);return Number.isFinite(n)?Math.min(1,Math.max(0,n)):null}
export function decodeShare(hash:string):Partial<ShareState>|null{
  if(!hash.startsWith('#'))return null
  const params=new URLSearchParams(hash.slice(1))
  if(!params.get('v')&&!params.get('sy')&&!params.get('c')&&!params.get('ct')&&!params.get('r'))return null
  const out:Partial<ShareState>={v:1}
  const lang=params.get('l')
  if(lang&&LANGS.includes(lang))out.lang=lang as Lang
  const sex=params.get('g')
  if(sex&&SEXES.includes(sex))out.sex=sex as 'male'|'female'
  const sy=params.get('sy')
  if(sy){const list=sy.split(',').filter(id=>SYSTEM_IDS.includes(id))as SystemId[];if(list.length)out.visible=list}
  const view=params.get('w')
  if(view&&VIEWS.includes(view))out.view=view as View
  const region=params.get('r')
  out.region=region&&REGIONS.includes(region)?region as RegionId:null
  out.concept=params.get('c')||''
  const explode=number(params.get('x'))
  if(explode!=null)out.explode=explode
  out.isolate=params.get('i')==='1'
  out.labels=params.get('lb')==='1'
  const ct=params.get('ct')
  if(ct){
    const [plane,position,depth,flip]=ct.split(',')
    if(PLANES.includes(plane)){
      const p=position==null?0:Math.min(100,Math.max(0,Number(position)))/100
      const d=depth==null?0:Math.min(100,Math.max(0,Number(depth)))/100
      out.section={plane:plane as SectionState['plane'],position:Number.isFinite(p)?p:0,depth:Number.isFinite(d)?d:0,flip:flip==='1'}
    }
  }else out.section=null
  const cam=params.get('cam')
  if(cam){
    const values=cam.split(',').map(Number)
    if(values.length===6&&values.every(n=>Number.isFinite(n)))out.camera={position:[values[0],values[1],values[2]],target:[values[3],values[4],values[5]]}
  }
  return out
}
