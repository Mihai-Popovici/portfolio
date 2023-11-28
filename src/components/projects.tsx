import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Skills from './skills';
import { webContent } from '@/content';

export default function Projects(props:any){

  function getTechArray(techNames:[string]){
    const array = techNames.map((name)=>(
      webContent.tech.filter((tech:any)=>tech.name===name)[0]
    ));
    console.log(array);
    return array
  }

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{props.title} | {props.projects.length}</CardTitle>
      </CardHeader>
      <CardContent className="pb-3 ">
          <div className="flex flex-col pb-5">
            {props.projects.map((project:any, i:number) => (
              <>
              <Card key={i} className="w-full my-3">
                <CardHeader>
                  <CardTitle>
                    <a href={project.url} target='_blank' className='text-blue-500 underline'>{project.name}</a>
                  </CardTitle>
                  </CardHeader>
                <CardContent className="h-full flex flex-col items-center p-5">
                  <embed src={project.url} className='h-[500px] w-full'></embed>
                </CardContent>
                <CardFooter>{project.description[props.language]}</CardFooter>
              </Card>
              <Skills title={props.techTitle} tech={getTechArray(project.tech)}/>
              </>
            ))}
          </div>
      </CardContent>
      <CardFooter />
    </Card>
  );
}