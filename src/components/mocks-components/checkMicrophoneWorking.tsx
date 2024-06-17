"use client";

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Scan } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { closeModal } from "@/redux/features/modalSlice";
import { useRouter } from "next/navigation";
import { VoiceRecorder } from "./recording-view";

export default function CheckMicrophoneWorking(): React.JSX.Element {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isOpen } = useSelector(
    (store: { modal: { isOpen: boolean } }) => store.modal
  );

  const handleCancel = () => {
    router.back();
  };

  const startQuestion = () => {
    dispatch(closeModal());
  };

  return (
    <Dialog defaultOpen={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Scan className="w-4 h-4 mr-2" />
          check microphone
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Check microphone working</DialogTitle>
        </DialogHeader>
        <VoiceRecorder />
        <DialogFooter className="sm:justify-start">
          <div className="flex items-center justify-between w-full">
            <Button type="button" onClick={handleCancel} variant="destructive">
              Cancel
            </Button>
            <Button type="button" onClick={startQuestion}>
              Start Question
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
