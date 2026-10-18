'use client';
import {useSyncExternalStore} from 'react';
import {readProgress,emptyProgress} from '@/lib/progress';
const subscribe=(cb:()=>void)=>{window.addEventListener('eu-progress',cb);window.addEventListener('storage',cb);return()=>{window.removeEventListener('eu-progress',cb);window.removeEventListener('storage',cb);};};
export function useProgress(){const value=useSyncExternalStore(subscribe,()=>JSON.stringify(readProgress()),()=>JSON.stringify(emptyProgress));return JSON.parse(value) as typeof emptyProgress;}
