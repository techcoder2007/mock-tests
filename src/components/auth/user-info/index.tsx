"use client";

import React from "react";
import useSWR from "swr";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/services/firebase";
import { UserProps } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EditUserInfo from "./edit-user-information";
import { DeleteInfoConfirm } from "./delete-confirm";
import { WavyBackground } from "../../animations/wavy-background";
import { PremiumQuestionTable } from "@/components/mocks-components/premium-mock-table";
import { Separator } from "@/components/ui/separator";

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
    return (
      <div className="text-lg text-center">
        <div className="h-[400px] flex items-center justify-center w-full">
          <h3>Loading...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="no-scrollbar">
      <div className="relative">
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
                <div className="font-thin text-sm">Role: simple_user</div>
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>{user?.email}</div>
                  <Separator orientation="vertical" />
                  <div>{user?.password}</div>
                  <Separator orientation="vertical" />
                  <div>{user?.isPaid?.toString()}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between items-center gap-3 w-full max-sm:flex-col">
                <EditUserInfo />
                <DeleteInfoConfirm userId={userId} />
              </div>
            </CardFooter>
          </Card>
        </WavyBackground>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="my-4">
          {user?.isPaid === true ? <PremiumQuestionTable /> : null}
        </div>
      </div>
    </div>
  );
}
