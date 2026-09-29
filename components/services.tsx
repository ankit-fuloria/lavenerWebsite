'use client';
import {useState} from 'react';
import Link from 'next/link';
import { services } from '@/lib/content';
import { Arrow, ServiceIcon } from './ui';
export default function Services(){const [filter,setFilter]=useState('All solutions');const filtered=services.filter(s=>filter==='All solutions'||s.category===filter);return <><div className="filter-row" role="group" aria-label="Filter services">{['All solutions','Build','Operate','Grow'].map(f=><button key={f} aria-pressed={filter===f} className={filter===f?'active':''} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="service-grid">{filtered.map(s=><Link href={`/services/${s.slug}`} className="service-card" key={s.slug}><div className="service-card-top"><span className="service-icon"><ServiceIcon name={s.icon}/></span><span className="card-arrow"><Arrow diagonal/></span></div><h3>{s.title}</h3><p>{s.summary}</p><div className="tags">{s.tags.map(tag=><span key={tag}>{tag}</span>)}</div></Link>)}</div></>}
