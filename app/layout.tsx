import type {Metadata} from 'next';
import './globals.css';
import {Header,Footer} from '@/components/shell';
export const metadata:Metadata={title:{default:'Engineering Universe | Learn how things work',template:'%s | Engineering Universe'},description:'A connected engineering curriculum. Learn concepts, experiment in visual labs, and build something you can explain.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" data-theme="dark"><body><a className="skip" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>;}
