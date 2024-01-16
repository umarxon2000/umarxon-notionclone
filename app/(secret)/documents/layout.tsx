"use client";

import { ChildProps } from "@/types";
import React from "react";
import { useConvexAuth } from "convex/react";
import { Loader } from "@/components/ui/Loader";
import { redirect } from "next/navigation";
import { Sidebar } from "../components";

const SecretLayout = ({ children }: ChildProps) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    return (
      <div className=" w-full h-full flex items-center justify-center ">
        <Loader size={"lg"} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/app/login");
  }
  return (
    <div className=" flex w-full">
      <Sidebar />
      <main
      className=""
      >{children}</main>
    </div>
  );
};

export default SecretLayout;
