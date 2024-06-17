"use client";
import React, { useState } from "react";
import { pathnames } from "@/constants/bredcrumbs-pathnames";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const UserInfo = dynamic(
  () =>
    import("@/components/auth/user-info").then((module) => {
      return module.UserInfo;
    }),
  {
    loading: () => <section className="text-center">Loading...</section>,
  }
);

export default function Profile() {
  const [id, setId] = useState<string>("");
  const router = useRouter();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const userId = JSON.parse(
        window.localStorage.getItem("user-id") as string
      );
      setId(userId);
      if (!userId) {
        return router.push("/auth/sign-in");
      }
    }
  }, [id]);

  return (
    <section className="profile">
      <div className="max-w-7xl mx-auto px-4 my-3">
        <Breadcrumbs links={pathnames} />
      </div>
      <div className="user-information">
        <UserInfo userId={id} />
      </div>
    </section>
  );
}
