'use client';
import dynamic from 'next/dynamic';
const Explorer=dynamic(()=>import('./explorer'),{ssr:false,loading:()=> <p className="notice">Loading the interactive map…</p>});
export default Explorer;
