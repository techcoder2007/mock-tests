"use client";

import React from "react";
import useSWR from "swr";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/services/firebase";
import { UserProps } from "@/types";
import { LogOutIcon, PenIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "../ui/button";
import { WavyBackground } from "../animations/wavy-background";

type UserInfoProps = {
  userId: string;
};

const fetcher = async (userId: string): Promise<UserProps | undefined> => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  const filledData = docSnap?.data() as UserProps;

  return filledData;
};

export function UserInfo({ userId }: UserInfoProps) {
  const { data: user, isLoading } = useSWR("user-info", () => fetcher(userId));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="no-scrollbar">
      <WavyBackground
        className="w-[90%] flex items-center flex-col max-sm:w-full"
        blur={5}
      >
        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center gap-3 max-sm:flex-col">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://picsum.photos/100/100" />
                <AvatarFallback>OK</AvatarFallback>
              </Avatar>
              <p className="font-thin text-sm">Role: simple_user</p>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription
              style={{ fontSize: "12px" }}
              className="flex items-center gap-1 my-2 max-sm:items-start"
            >
              <span className="font-normal">Email:</span>
              <p className="font-light">{user?.email}</p>
            </CardDescription>
            <CardDescription
              style={{ fontSize: "12px" }}
              className="flex items-center gap-1"
            >
              <span className="font-normal">Password:</span>
              <p className="font-light">{user?.password}</p>
            </CardDescription>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between items-center gap-3 w-full max-sm:flex-col">
              <Button
                variant="outline"
                style={{ fontSize: "14px" }}
                className="max-sm:w-full"
                size="sm"
              >
                <PenIcon className="w-5 h-5 mr-2" />
                Change information
              </Button>
              <Button
                variant="destructive"
                className="max-sm:w-full"
                size="sm"
                style={{ fontSize: "14px" }}
              >
                <LogOutIcon className="w-5 h-5 mr-2" />
                Log out
              </Button>
            </div>
          </CardFooter>
        </Card>
      </WavyBackground>
    </div>
  );
}
