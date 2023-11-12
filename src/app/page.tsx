'use client';
import { ThemeToggle } from '@/components/theme-toogle';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import AboutMe from '@/components/about-me';
import Skills from '@/components/skills';
import EffectOnClick from '@/components/effect-onclick';
import BgEffect from '@/components/bg-effect';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function Home() {
  const header = useRef<HTMLDivElement>(null);
  const [contentH, setContentH] = useState('calc(100vh - 0px)');
  
  useEffect(()=>{
    const h = parseInt(header.current?.getBoundingClientRect().height.toFixed(0)||'0');
    setContentH(`calc(100vh - ${h}px)`)
  },[]);

  return (
    <main className="h-screen">
      <BgEffect />
      <div className="h-full">
        <Card className="h-full flex flex-col bg-transparent rounded-none">
          <CardHeader ref={header} className="border-b flex flex-row justify-between items-center p-5 flex-wrap bg-opacity-100 rounded-none">
            <CardTitle>My Portfolio</CardTitle>
            <ThemeToggle />
          </CardHeader>
          <CardContent className='pl-5 py-0 pr-3 backdrop-blur-3xl' style={{height:contentH}}>
            <ScrollArea className="h-full w-full pt-0 xl:px-52">
              <div className='grid grid-cols-1 gap-5 mr-5 my-5'>
                <AboutMe />
                <Skills />
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
                <EffectOnClick />
                <EffectOnClick />
                </div>
              </div>
            </ScrollArea>
          </CardContent>

        </Card>
      </div>
    </main>
  );
}

