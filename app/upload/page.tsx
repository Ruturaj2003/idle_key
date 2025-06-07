"use client";
import React, { useRef } from "react";

const UploadPage = () => {
  console.log("Files submit btn clicked");
  const realFileRef = useRef<HTMLInputElement | null>(null);
  const dummyFileRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    if (!realFileRef.current && !dummyFileRef.current) {
      console.log("Both Files not Selected");
      return;
    }
    const realFileList = realFileRef.current?.files;
    const dummyFileList = dummyFileRef.current?.files;

    if (!realFileList || realFileList.length === 0) {
      console.log("No real file selected");
      return;
    }

    if (!dummyFileList || dummyFileList.length === 0) {
      console.log("No dummy file selected");
      return;
    }

    const realFile = realFileList[0];
    const dummyFile = dummyFileList[0];

    console.log("Real File ", realFile.name);
    console.log("Dummy File ", dummyFile.name);
  };

  return (
    <div className="flex justify-between items-center flex-col gap-2.5">
      Upload Files here
      <input
        type="file"
        accept=".pdf"
        name="realFile"
        id="realFile"
        ref={realFileRef}
      />
      <input
        type="file"
        accept=".pdf"
        name="dummyFile"
        id="dummyFile"
        ref={dummyFileRef}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default UploadPage;
