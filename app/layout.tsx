import type {Metadata} from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';
export const metadata:Metadata={title:{default:'Lavener Holdings — Ideas into digital reality',template:'%s | Lavener Holdings'},description:'Websites, mobile apps, ERP, CRM, AI, learning platforms and digital design by Lavener Holdings. Explore School Setu and discuss your next project.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/></body></html>}
