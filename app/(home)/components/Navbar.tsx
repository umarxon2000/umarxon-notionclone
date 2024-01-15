"use client"
import React from 'react'
import { Logo } from '.'
import { ModeToggle } from '@/components/shared/Mode-Toggle'
import { Button } from '@/components/ui/button'
import { useScrolled } from '@/hooks/use-scrolled'
import { cn } from '@/lib/utils'

export const Navbar = () => {
  const scrolled = useScrolled()
  
  return (
    <div className={cn('z-50 bg-background fixed top-0 flex items-center w-full p-6 justify-between ', scrolled &&  " border-b shadow-sm")}>
        <Logo />  
        <div className='flex items-center gap-x-2'>
          <Button size={"sm"} variant={"ghost"}>
            Log in
          </Button>
          <Button size={"sm"}>Get notion free </Button>
            <ModeToggle />
        </div>
        </div>
  )
}

