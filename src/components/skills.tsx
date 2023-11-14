import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function Skills() {
  const m = Array(5).fill('');
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <ScrollArea className="w-full">
          <div className="flex pb-5">
            {m.map((v, i) => (
              <Card key={i} className="mr-5 w-52 h-full">
                <CardContent className="h-full flex flex-col items-center p-5">
                  <img
                    className="h-10 mb-5"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                  ></img>
                  JavaScript
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
