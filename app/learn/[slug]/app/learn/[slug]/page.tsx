import {notFound} from 'next/navigation';
import {lessons,lessonById} from '@/content/lessons';
import {LessonView} from '@/components/lesson';
export const dynamicParams=false;
export function generateStaticParams(){return lessons.map(l=>({slug:l.id}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:lessonById(slug)?.title};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const l=lessonById(slug);if(!l)notFound();return <LessonView key={l.id} lesson={l}/>;}
