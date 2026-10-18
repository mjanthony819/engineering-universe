export type Progress={passed:string[];bookmarks:string[];project:boolean;started:string[]};
export const emptyProgress:Progress={passed:[],bookmarks:[],project:false,started:[]};
const key='eu-progress-v1';
export function readProgress():Progress{try{const raw=JSON.parse(localStorage.getItem(key)||'null');if(raw&&Array.isArray(raw.passed)&&Array.isArray(raw.bookmarks)&&Array.isArray(raw.started))return {...emptyProgress,...raw};}catch{}return {...emptyProgress};}
export function writeProgress(p:Progress){try{localStorage.setItem(key,JSON.stringify(p));window.dispatchEvent(new Event('eu-progress'));return true;}catch{return false;}}
