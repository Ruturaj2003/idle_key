import React from "react";

const UploadPage = () => {
  return (
    <div className="flex justify-between items-center flex-col gap-2.5">
      Upload Files here
      <input type="file" accept=".pdf" name="realFile" id="realFile" />
      <input type="file" accept=".pdf" name="dummyFile" id="dummyFile" />
    </div>
  );
};

export default UploadPage;
