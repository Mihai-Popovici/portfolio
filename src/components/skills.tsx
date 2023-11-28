import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function Skills(props:any) {
  return (
    <Card className="w-full h-min">
      <CardHeader>
        <CardTitle>{props.title} | {props.tech.length}</CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <ScrollArea className="w-full">
          <div className="flex pb-5">
            {props.tech.map((tech:any, i:number) => (
              <Card key={i} className="mr-5 w-36 h-full">
                <CardContent className="h-full flex flex-col items-center p-5 hover:scale-105 transition-all">
                  <img
                    className={`h-10 mb-5 px-1 ${tech?.class}`}
                    src={tech.imgUrl}
                  ></img>
                  {tech.name}
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
      <CardFooter />
    </Card>
  );
}
