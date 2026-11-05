import type {Metadata} from 'next';
import './globals.css';
import {Header,Footer} from '@/components/shell';
export const metadata:Metadata={title:{default:'Engineering Universe | Learn how things work',template:'%s | Engineering Universe'},description:'A connected engineering curriculum. Learn concepts, experiment in visual labs, and build something you can explain.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" data-theme="dark"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/></head><body><a className="skip" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>;}
