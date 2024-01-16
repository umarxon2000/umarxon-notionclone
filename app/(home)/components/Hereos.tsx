"use client"


import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import {useConvexAuth} from 'convex/react'
import { Loader } from "@/components/ui/Loader";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";


export const Hereos = () => {
  const {isAuthenticated, isLoading} = useConvexAuth();
  return (
    <>
      <div className=" max-w-3xl space-y-4">
        <h1 className=" text-3xl sm:text-5xl md:text-6xl font-bold">
          Write, plan, share. with AI your site.
        </h1>
        <h3 className=" text-base sm:text-xl md:text-2xl font-medium ">
          Notion is the connected workspace where better, faster work heppens
        </h3>
        {isLoading && (
          <div className="w-full flex justify-center items-center">
            <Loader />
          </div>
        )}

        {isAuthenticated && !isLoading && (
          <Button asChild>
            <Link href={"/documents"}>
              Enter notion <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        )}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button>
                Get Notion Free <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </SignInButton>
          </>
        )}
      </div>
      <div className=" flex flex-col items-center justify-center max-w-5xl">
        <div className=" flex items-center">
          <div className=" relative h-[400px] w-[400px] hidden md:block ">
            <Image
              src="/men.svg"
              alt=" logo"
              fill
              className="object-coverdark:hidden"
            />
            <Image
              src="/men-dark.svg"
              alt=" logo"
              fill
              className="object-cover hidden dark:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};
