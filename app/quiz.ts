/** Quiz engine: question banks built from clinical cards, in find-it and name-it styles. */
import type {Atlas,Concept,SystemId} from './anatomy'
import {CLINICAL,type ClinicalCard} from './knowledge'
import type {Lang} from './i18n'

const SIDE=/^(left|right|middle) /

/** Clinical card for a concept, matching by exact then side-stripped name. */
export function cardFor(concept:Concept):ClinicalCard|undefined{
  const key=concept.name.toLowerCase()
  return CLINICAL[key]??CLINICAL[key.replace(SIDE,'')]
}

/** Localized display name: Indonesian card name when available. */
export function displayName(concept:Concept,lang:Lang):string{
  const card=cardFor(concept)
  return lang==='id'&&card?card.nameId:concept.name
}

export interface QuizBankEntry{concept:Concept;system:SystemId;card?:ClinicalCard}

/** Build the question bank from concepts that have a clinical card and are currently visible. */
export function buildQuizBank(atlas:Atlas,visible:SystemId[]):QuizBankEntry[]{
  const byName=new Map<string,Concept>()
  for(const c of atlas.concepts){
    const k=c.name.toLowerCase()
    if(!byName.has(k))byName.set(k,c)
    const stripped=k.replace(SIDE,'')
    if(!byName.has(stripped))byName.set(stripped,c)
  }
  const partById=new Map(atlas.parts.map(p=>[p.id,p]))
  const visibleSet=new Set(visible)
  const bank:QuizBankEntry[]=[],seen=new Set<string>()
  for(const [key,card] of Object.entries(CLINICAL)){
    const concept=byName.get(key)
    if(!concept||seen.has(concept.id))continue
    // Systems come from the concept's own parts: male parts share the concept id,
    // female parts use source ids (UBERON/FMA) inside concept.elements.
    let system:SystemId|undefined
    for(const id of concept.elements){const part=partById.get(id);if(part){system=part.system;break}}
    if(!system||!visibleSet.has(system))continue
    seen.add(concept.id)
    bank.push({concept,system,card})
  }
  return bank
}

export type QuizKind='find'|'name'
export type QuizMix='find'|'name'|'mixed'
export interface QuizQuestion{kind:QuizKind;concept:Concept;options:Concept[]}

function shuffle<T>(list:T[]):T[]{
  for(let i=list.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[list[i],list[j]]=[list[j],list[i]]}
  return list
}

/** Generate quiz questions; name-it questions take same-system distractors where possible. */
export function makeQuestions(bank:QuizBankEntry[],count:number,mix:QuizMix):QuizQuestion[]{
  const pool=shuffle([...bank]).slice(0,Math.max(1,Math.min(count,bank.length)))
  return pool.map((entry,i)=>{
    const kind:QuizKind=mix==='mixed'?(i%2===0?'find':'name'):mix
    if(kind==='name'){
      const sameSystem=shuffle(bank.filter(b=>b.concept.id!==entry.concept.id&&b.system===entry.system)).slice(0,3)
      const others=shuffle(bank.filter(b=>b.concept.id!==entry.concept.id&&b.system!==entry.system)).slice(0,3-sameSystem.length)
      const options=shuffle([entry.concept,...sameSystem.concat(others).map(b=>b.concept)])
      return {kind:'name',concept:entry.concept,options}
    }
    return {kind:'find',concept:entry.concept,options:[]}
  })
}
