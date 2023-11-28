"use client"
import { ThemeToggle } from '@/components/theme-toogle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import AboutMe from '@/components/about-me';
import Skills from '@/components/skills';
import BgEffect from '@/components/bg-effect';
import { webContent } from '@/content';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useLocalStorage from "use-local-storage";
import Projects from './projects';

export default function Home()  {

  const [language, setLanguage] = useLocalStorage('language','ro');
  return (
    <main className="h-screen">
      <BgEffect flag={webContent.flags[language]}/>
      <Card
        className="h-full grid bg-transparent rounded-none z-10"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        <CardHeader className="border-b flex flex-row justify-center p-5 rounded-none bg-backgroundNoAlpha">
          <div className="flex justify-between items-center max-w-4xl w-full">
            <CardTitle>{webContent.title[language]}</CardTitle>
            <div className="flex flex-row">
              <div className="mr-2">
                <Select
                  onValueChange={(l) => setLanguage(l)}
                  defaultValue={language}
                >
                  <SelectTrigger className="w-fit">
                    <SelectValue placeholder={webContent.languages[language]} />
                  </SelectTrigger>
                  <SelectContent>
                    {webContent.languageList.map((lang: string,id:number) => (
                      <SelectItem key={`lang${id}`} value={lang}>
                        <img
                          className="inline-block mr-2 h-4 w-6 object-cover"
                          src={webContent.flags[lang]}
                        />
                        <span>{webContent.language[lang]}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <ThemeToggle tooltip={webContent.changeTheme[language]} themes={webContent.themes} langauge={language}/>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 backdrop-blur-3xl overflow-hidden flex flex-row justify-center">
          <ScrollArea className="h-full w-full pt-0">
            <div className='flex flex-row justify-center'>
            <div className="grid grid-cols-1 gap-5 my-5 max-w-4xl">
              <AboutMe
                title={webContent.aboutMe[language]}
                content={webContent.aboutMeDescription[language]}
              />
              <Skills title={webContent.techTitle[language]} tech={webContent.tech}/>
              <Projects title={webContent.projectsTitle[language]} techTitle={webContent.techTitle[language]} projects={webContent.projects} language={language}/>
            </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </main>
  );
}