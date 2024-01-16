"use client"
import React from 'react'
import { Logo } from '.'
import { ModeToggle } from '@/components/shared/Mode-Toggle'
import { Button } from '@/components/ui/button'
import { useScrolled } from '@/hooks/use-scrolled'
import { cn } from '@/lib/utils'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import {useConvexAuth} from 'convex/react'
import Link from 'next/link'
import { Loader } from '@/components/ui/Loader'

export const Navbar = () => {
  const {isAuthenticated, isLoading} = useConvexAuth();
  const scrolled = useScrolled()
  
  return (
    <div className={cn('z-50 bg-background fixed top-0 flex items-center w-full p-6 justify-between ', scrolled &&  " border-b shadow-sm")}>
        <Logo />  
        <div className='flex items-center gap-x-2'>
          {isLoading && <Loader/>}
          {!isAuthenticated && !isLoading && (
            <>
            
          <SignInButton mode="modal">
          <Button size={"sm"} variant={"ghost"}>
            Log in
          </Button>

          </SignInButton>
          <SignInButton mode="modal">

          <Button size={"sm"}>Get notion free </Button>
          </SignInButton>
            
            </>
          )}
          {
            isAuthenticated && !isLoading && (
              <>
              <Button size={"sm"} variant={"ghost"}>
                <Link href={"/documents"} >Enter Notion</Link>
            </Button>

            <UserButton afterSignOutUrl='/' />
            </>
            )
          }
            <ModeToggle />
        </div>
        </div>
  )
}

