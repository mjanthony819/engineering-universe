export function toBits(value:number):number[]{if(!Number.isInteger(value)||value<0||value>255)throw new RangeError('Use an integer from 0 to 255');return Array.from({length:8},(_,i)=>(value>>(7-i))&1);}
export function fromBits(bits:number[]):number{if(bits.length!==8||bits.some(b=>b!==0&&b!==1))throw new RangeError('Use exactly eight bits');return bits.reduce((n,b)=>n*2+b,0);}
export type Gate='AND'|'OR'|'XOR';
export function gate(a:boolean,b:boolean,op:Gate):boolean{return op==='AND'?a&&b:op==='OR'?a||b:a!==b;}
export type Frame={values:number[];prefix:number;note:string};
export function insertionFrames(input:number[]):Frame[]{const a=[...input];const frames:Frame[]=[{values:[...a],prefix:Math.min(1,a.length),note:'The first item is a sorted prefix.'}];for(let i=1;i<a.length;i++){const key=a[i];let j=i-1,shifts=0;while(j>=0&&a[j]>key){a[j+1]=a[j];j--;shifts++;}a[j+1]=key;frames.push({values:[...a],prefix:i+1,note:`Insert ${key}; shift ${shifts} larger item${shifts===1?'':'s'} right. First ${i+1} items are sorted.`});}return frames;}
