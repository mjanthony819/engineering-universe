export type LabId='binary'|'logic'|'sort';
export type Section={id:string;title:string;body:string;code?:string};
export type Quiz={question:string;options:string[];answer:number;explanation:string};
export type Lesson={id:string;title:string;summary:string;minutes:number;difficulty:'Beginner'|'Intermediate'|'Advanced';discipline:string;status:'source-checked';prerequisites:string[];objectives:string[];why:string;analogy:string;sections:Section[];terms:Record<string,string>;misconception:string;exercise:{task:string;answer:string};quiz:Quiz[];project:string;references:{title:string;url:string}[];lab?:LabId;next?:string};
export type Topic={id:string;title:string;discipline:string;level:'Beginner'|'Intermediate'|'Advanced';prerequisites:string[];optional?:string[];description:string;lesson?:string};
