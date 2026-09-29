import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Globe, Smartphone, Workflow, Layers, Sparkles, GraduationCap, TrendingUp, PenTool } from 'lucide-react';
export function Arrow({diagonal=false}:{diagonal?:boolean}){return diagonal?<ArrowUpRight size={18}/>:<ArrowRight size={18}/>}
export function ServiceIcon({name,size=24}:{name:string;size?:number}){const icons:Record<string,typeof Globe>={Globe,Smartphone,Workflow,Layers,Sparkles,GraduationCap,TrendingUp,PenTool};const Icon=icons[name]||Globe;return <Icon size={size} strokeWidth={1.5}/>}
export function Brand({light=false}:{light?:boolean}){return <Link href="/" className={`brand ${light?'brand-light':''}`} aria-label="Lavener Holdings home"><img src="/lavener-symbol.png" alt="" width="40" height="46"/><img src="/lavener-wordmark.png" alt="Lavener Holdings" width="161" height="33"/></Link>}
