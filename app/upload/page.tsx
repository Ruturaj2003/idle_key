"use client";
import axios from "axios";
import React, { useRef, useState } from "react";
import { validateFile } from "./_utils/validateFile";

const UploadPage = () => {
  console.log("Files submit btn clicked");
  const realFileRef = useRef<HTMLInputElement | null>(null);
  const dummyFileRef = useRef<HTMLInputElement | null>(null);
  const [fileProgress, setFileProgress] = useState(0);

  const handleSubmit = async () => {
    if (realFileRef === null || dummyFileRef === null) {
      return;
    }
    const result = validateFile(realFileRef, dummyFileRef);

    if (!result.success) {
      console.log("Error :" + result.msg);
      return;
    }
    console.log("Sucess : " + result.msg);
    if (!result.data) return;
    const { realFile, dummyFile } = result.data;

    console.log("Real File ", realFile!.name);
    console.log("Dummy File ", dummyFile!.name);

    const formdata = new FormData();
    formdata.append("realFile", realFile);
    formdata.append("dummyFile", dummyFile);
    try {
      await axios.post("/api/upload", formdata, {
        onUploadProgress(progressEvent) {
          const percent = (progressEvent.loaded / progressEvent.total!) * 100;
          setFileProgress(percent);
        },
      });
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div className="flex justify-between items-center flex-col gap-2.5">
      Upload Files here : Note : They should be Max 50 Mb
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
      <h2>File upload progress : {fileProgress}</h2>
    </div>
  );
};

export default UploadPage;
