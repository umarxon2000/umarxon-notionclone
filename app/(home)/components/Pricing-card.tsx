"use client"

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import React from 'react'
import {useConvexAuth} from 'convex/react'
import { Loader } from '@/components/ui/Loader';
import { SignInButton } from '@clerk/clerk-react';
interface PricingCardProps {
    title:String;
    subtitle:String;
    options:String;
    price:String;
}
export const PricingCard = ({title, subtitle , options, price}:PricingCardProps) => {
  const {isAuthenticated, isLoading} = useConvexAuth();
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-black dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {subtitle}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">
          {price !== "Free" && "$"}
          {price}
        </span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>
      {isLoading && <Loader />}
      {isAuthenticated && !isLoading && (
        <Button >Get started</Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal" >
          <Button>
            Log in 
          </Button>

        </SignInButton>
      )}
      <ul role='list' className=' space-y-4 text-left mt-8'>
        {
            options.split(', ').map(option=> (
                <li key={option} className=' flex items-center space-x-3'>
                    <Check className=' flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400' />
                    <span>{option}</span>
                </li>
            ))
        }
      </ul>
    </div>
  )
}
