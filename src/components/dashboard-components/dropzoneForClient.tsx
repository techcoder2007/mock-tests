"use client";
import React, { useState, useRef } from "react";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/services/firebase";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export default function DropzoneClient() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<string[]>([]);
  const [fileInfo, setFileInfo] = useState<string | null>(null); // Information about the uploaded file
  const [error, setError] = useState<string | null>(null); // Error message state

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const { files } = e.target;
      handleFiles(files);
    }
  };

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    handleFiles(files);
  }

  function handleFiles(files: FileList) {
    const currentFile = files[0];

    const fileSizeInKB = Math.round(currentFile.size / 1024); // Convert to KB

    if (currentFile) {
      setFileInfo(`Uploaded file: ${currentFile.name} (${fileSizeInKB} KB)`);
    }
  }

  return (
    <div className="my-3">
      <h1 className="text-center my-3">File Upload</h1>
      <Card
        onDrop={handleDrop}
        className={`border-2 border-dashed bg-muted hover:cursor-pointer hover:border-muted-foreground/50 h-[10rem] flex items-center justify-center flex-col`}
      >
        <CardContent className="flex flex-col items-center justify-center space-y-2 px-2 py-4 text-xs">
          <div className="flex items-center justify-center text-muted-foreground">
            <span className="font-bold text-base">Drag Files to Upload or</span>
            <Button
              variant="ghost"
              size="lg"
              className="ml-auto flex h-8 space-x-2 px-0 pl-1 text-base text-white"
            >
              Click Here
            </Button>
            <input
              ref={fileInputRef}
              onChange={handleFilesChange}
              type="file"
              className="hidden"
              multiple
            />
          </div>
          {fileInfo && <p className="text-muted-foreground">{fileInfo}</p>}
          {error && <span className="text-red-500">{error}</span>}
        </CardContent>
      </Card>
    </div>
  );
}
