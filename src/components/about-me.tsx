import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TooltipButton } from './tooltip-button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function AboutMe(props:any) {

  const theme = useTheme();
  const [bgColor, setBgColor] = useState('');

  useEffect(()=>{
    if(theme.theme === 'light'){
      setBgColor('bg-white');
    }else{
      setBgColor('bg-black');
    }
  },[theme])

  return (
    <Card className='bg-transparent'>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent className='flex'>
        <Avatar className="mr-5">
          <AvatarImage src="https://avatars.githubusercontent.com/u/125585915?s=96&v=4" />
          <AvatarFallback>PM</AvatarFallback>
        </Avatar>
        {props.content}
      </CardContent>
      <CardFooter className=''>
        <TooltipButton
          tooltip="Github"
          content={
            <a href="https://github.com/Mihai-Popovici" target="_blank">
              <GitHubLogoIcon />
            </a>
          }
        />
        <TooltipButton
          tooltip="LinkedIn"
          content={
            <a
              href="https://www.linkedin.com/in/popovici-mihai/"
              target="_blank"
            >
              <LinkedInLogoIcon />
            </a>
          }
        />
        <TooltipButton
          tooltip="Email"
          content={
            <a href="mailto:popovicimihaimail@gmail.com" target="_blank">
              <EnvelopeClosedIcon />
            </a>
          }
        />
      </CardFooter>
    </Card>
  );
}
