import React from "react";
import { UserAuthForm } from "@/components/auth/user-auth-form";
import { Spotlight } from "@/components/animations/spotlight";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignIn = () => {
  return (
    <section className="h-[60rem] w-full rounded-md flex md:items-center md:justify-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Sign in to access premium questions
        </h1>
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative top-28 flex flex-col text-center justify-center items-center">
            <div className="max-w-[450px] w-full">
              <UserAuthForm signInWithBrands />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
