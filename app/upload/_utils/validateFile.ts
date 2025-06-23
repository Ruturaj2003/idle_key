export function validateFile(
  realFileRef: React.RefObject<HTMLInputElement | null>,
  dummyFileRef: React.RefObject<HTMLInputElement | null>
) {
  interface ReturnObjectType {
    success: boolean;
    data: {
      realFile: File;
      dummyFile: File;
    } | null;
    msg: string;
  }

  const returnObject: ReturnObjectType = {
    success: false,
    data: null,
    msg: "",
  };

  const realFileList = realFileRef.current?.files;
  const dummyFileList = dummyFileRef.current?.files;

  if (!realFileList || realFileList.length === 0) {
    returnObject.msg = "No real file selected.";
    return returnObject;
  }

  if (!dummyFileList || dummyFileList.length === 0) {
    returnObject.msg = "No dummy file selected.";
    return returnObject;
  }

  const realFile = realFileList[0];
  const dummyFile = dummyFileList[0];

  if (realFile.type !== "application/pdf") {
    returnObject.msg = "Real file must be a PDF.";
    return returnObject;
  }

  if (dummyFile.type !== "application/pdf") {
    returnObject.msg = "Dummy file must be a PDF.";
    return returnObject;
  }

  const maxFileSize = 50 * 1024 * 1024; // 50 MB

  if (realFile.size > maxFileSize) {
    returnObject.msg = "Real file is larger than 50 MB.";
    return returnObject;
  }

  if (dummyFile.size > maxFileSize) {
    returnObject.msg = "Dummy file is larger than 50 MB.";
    return returnObject;
  }
  returnObject.msg = "File Validated";
  returnObject.data = { realFile, dummyFile };
  returnObject.success = true;
  return returnObject;
}
