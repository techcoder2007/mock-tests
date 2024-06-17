"use client";

import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

export const VoiceRecorder: React.FC = () => {
  const [audioUrl, setAudioUrl] = useState<string>("");

  const recordControl = useAudioRecorder();

  localStorage.setItem("record", String(recordControl.isPaused));

  const addAudioElement = (blob: Blob | MediaSource) => {
    const url = URL.createObjectURL(blob);
    localStorage.setItem("new-voice-record", url);
    setAudioUrl(url);
  };

  const audioUrlIsTrue = () => {
    if (audioUrl && localStorage.getItem("new-voice-record")) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="text-left">
      <div className="text-center my-2">
        <AudioRecorder
          onRecordingComplete={(blob) => addAudioElement(blob)}
          recorderControls={recordControl}
          downloadFileExtension="webm"
          showVisualizer={true}
          downloadOnSavePress={true}
        />
        {!recordControl.isRecording && (
          <p className="text-sm absolute z-10 top-[85px] right-10 font-mono">
            <ArrowLeft className="w-3 h-3 inline-block" /> click to record sound
          </p>
        )}
      </div>
      {audioUrlIsTrue() && (
        <div className="my-5">
          <span className="text-sm">Old Record</span>
          <audio controls className="w-full border bg-gray-100 rounded-md">
            <source src={localStorage.getItem("new-voice-record") as string} />
          </audio>
        </div>
      )}
      <span className="text-sm font-thin">
        Recording time{" "}
        <b className="font-bold">{recordControl.recordingTime} seconds</b>
      </span>
    </div>
  );
};
