"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { handleLogOut } from "@/server-actions/actions";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export async function DeleteInfoConfirm({ userId }: { userId: string }) {
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm">
          LogOut
          <LogOut className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <p className="text-sm font-mono">
          If you say yes, this account will be completely deleted
        </p>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button
          variant="destructive"
          onClick={() =>
            handleLogOut(userId).then(() => {
              router.push("/auth/sign-in");
              localStorage.removeItem("user-id");
              window.location.reload();
            })
          }
        >
          Delete Account
        </Button>
      </DialogContent>
    </Dialog>
  );
}
