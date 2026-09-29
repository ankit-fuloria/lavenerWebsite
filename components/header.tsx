'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Brand, Arrow } from './ui';
export default function Header(){const [open,setOpen]=useState(false);return <header className="site-header"><div className="container nav"><Brand/><nav id="main-navigation" className={open?'nav-links is-open':'nav-links'} aria-label="Main navigation">{[['Services','/#services'],['About us','/#about'],['School Setu','/school-setu'],['Contact','/#contact']].map(([label,href])=><a key={label} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav><a className="button nav-cta" href="/#contact">Let’s talk <Arrow diagonal/></a><button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-controls="main-navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>}
