import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { Player } from '@lordicon/react';
import { useTheme } from 'next-themes';

const ICON = require('../../public/system-solid-117-bolt.json');

export default function EffectOnClick() {
  const div = useRef<HTMLDivElement>(null);
  const div2 = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player>(null);
  const [animating, setAnimating] = useState(false);
  const [box, setBox] = useState({x:0,y:0,w:0,h:0});
  const [mousePos, setMousePos] = useState({x:0,y:0});
  const theme = useTheme()
  const [color, setColor] = useState('#000');
  const [bg, setBg] = useState('');

  useEffect(()=>{
    if(theme.theme === 'light'){
      setColor('#020817');
      setBg('bg-white');
    }else{
      setColor('#fff');
      setBg('bg-black');
    }
  },[theme]);

  function handleMove(e: React.MouseEvent) {
    const rect = div.current?.getBoundingClientRect();
    const divX = rect?.left || 0;
    const divW = rect?.width || 0;
    const divH = rect?.height || 0;
    const divY = rect?.top || 0;
    setBox({x:divX,y:divY,w:divW,h:divH});
    setMousePos({x:e.clientX,y:e.clientY});
  }

  function handleClick() {
    if (!animating) {
      setAnimating(true);
    }
  }

  function animateClick(){
    playerRef.current?.playFromBeginning();
  }

  useEffect(()=>{
    if(animating){
      div2.current?.removeAttribute('hidden');
      const rect2 = div2.current?.getBoundingClientRect();
      const w = (rect2?.width || 10) / 2;
      const h = (rect2?.height || 10) / 2;
      const X = Math.min(box.w - w * 2, Math.max(0, mousePos.x - box.x - w));
      const Y = Math.min(box.h - h * 2, Math.max(0, mousePos.y - box.y - h));
      div2.current?.setAttribute('style', `transform: translate(${X}px,${Y}px)`);
      animateClick();
    }else{
      div2.current?.setAttribute('hidden','');
    }
  },[animating])

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Effect on Click</CardTitle>
        <CardDescription>Click on the box</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          ref={div}
          onClick={handleClick}
          onMouseMove={(e) => handleMove(e)}
          className={` max-w-[160px] h-40 border ${bg} bg-opacity-50`}
        >
          <div ref={div2} hidden className="w-8 h-8">
            <Player ref={playerRef} icon={ICON} colorize={color} onComplete={()=>setAnimating(false)}/>
 </div>
        </div>
      </CardContent>
    </Card>
  );
}
