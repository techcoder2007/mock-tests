"use client";
import React from "react";
import { Navbar } from "./navbar";
import { Toaster } from "react-hot-toast";
import { ProgressBarProvider } from "@/providers/nprogress-provider";
import { Footer } from "./footer";
import useSWR from "swr";
import { UserProps } from "@/types";

interface profileHandlerResult {
  currentUser: UserProps;
  query: string;
  ok: boolean;
  userStatus: "Unauthorized" | "Authorization";
}

const fetcher = async (
  userId: string
): Promise<profileHandlerResult | undefined> => {
  try {
    const res = await fetch(`/auth/profile/api?userId=${userId}`);
    const result = await res.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
};

const WithMainLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: profileData, isLoading } = useSWR("profile-data", () =>
    fetcher(localStorage.getItem("user-id") as string)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Navbar userVerify={profileData?.userStatus || undefined} />
      <Toaster position="bottom-right" />
      <ProgressBarProvider>{children}</ProgressBarProvider>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(WithMainLayout);
