'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TooltipButton } from './tooltip-button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function ThemeToggle(props:any) {
  const { setTheme } = useTheme();
  return (
    <TooltipProvider>
      <DropdownMenu>
        <Tooltip>
          <DropdownMenuTrigger asChild>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">{props.tooltip}</span>
              </Button>
            </TooltipTrigger>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
              {props.themes.light[props.langauge]}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              {props.themes.dark[props.langauge]}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              {props.themes.system[props.langauge]}
            </DropdownMenuItem>
          </DropdownMenuContent>
          <TooltipContent>
            <p>{props.tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </DropdownMenu>
    </TooltipProvider>
  );
}
