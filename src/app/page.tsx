'use client';
import { ThemeToggle } from '@/components/theme-toogle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import AboutMe from '@/components/about-me';
import Skills from '@/components/skills';
import BgEffect from '@/components/bg-effect';

export default function Home() {
  return (
    <main className="h-screen">
      <BgEffect />
      <Card
        className="h-full grid bg-transparent rounded-none"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        <CardHeader className="border-b flex flex-row justify-between items-center p-5 flex-wrap bg-opacity-100 rounded-none">
          <CardTitle>My Portfolio</CardTitle>
          <ThemeToggle />
        </CardHeader>
        <CardContent className="pl-5 py-0 pr-3 backdrop-blur-3xl overflow-hidden">
          <ScrollArea className="h-full w-full pt-0 xl:px-52">
            <div className="grid grid-cols-1 gap-5 mr-5 my-5">
              <AboutMe />
              <Skills />
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5"></div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </main>
  );
}


