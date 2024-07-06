"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { FC } from "react";
import axios from "axios";

interface Image {
  id: InnerObject;
  name: InnerObject;
  quality: InnerObject;
}
interface InnerObject {
  S: string;
}

/**
 * {
   id: { S: aidfhdafhoafe }
   name: { S: aidfhdafhoafe }
   quality: { S: aidfhdafhoafe }
    }
 */
interface Props {
  BASE_URL: string | undefined;
  VERSION: string | undefined;
  setFiles: Function;
  files: File | null;
  imageList: Image[];
  setImageList: Function;
}

const Upload: FC<Props> = ({
  BASE_URL,
  VERSION,
  setFiles,
  files,
  imageList,
  setImageList,
}) => {
  const [dragging, setDragging] = useState<Boolean | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<String | null>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleOnDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);

    const validFileTypes = ["image/jpg", "image/jpeg"];

    if (!validFileTypes.includes(event.dataTransfer.files[0].type)) {
      toast.error("Must be JPG only please");
      return;
    }
    if (event.dataTransfer.files.length > 1) {
      toast.error("Only 1 file please");
      return;
    }
    try {
      setFiles(event.dataTransfer.files[0]);
      const response = await axios({
        method: "post",
        url: `${BASE_URL}${VERSION}/image`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: event.dataTransfer.files[0],
      });
  
      const img = response.data;
      const newImageList = [img, ...imageList.slice(0)];
  
      setImageList(newImageList);
  
      toast.success("Image Uploaded!");
    } catch (e: any) {
      setError(e);
      toast.error(`Image Failed to Upload: ${e}`);
    }
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const validFileTypes = ["image/jpg", "image/jpeg"];
    if (!event.target.files) {
      return;
    }
    if (!validFileTypes.includes(event.target.files[0].type)) {
      setError("File must be in JPG/PNG format");
      return;
    }
    setProcessing(true);
    try {
      setFiles(event.target.files[0]);
      const response = await axios({
        method: "post",
        url: `${BASE_URL}${VERSION}/image`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: event.target.files[0],
      });
      const newImageList = [response.data, ...imageList.slice(0)];
      setImageList(newImageList);
      toast.success("Image Uploaded!");
    } catch (e: any) {
      setError(e);
      toast.error(`Image Failed to Upload: ${e}`);
    }
    setProcessing(false);
  };
  const makeFileNull = (event: any) => {
    event.target.value = null;
  }

  return (
    <div
      className={`font-times flex flex-col items-center justify-center w-[50%] h-56 border-4 border-dashed transition-all duration-200 mb-10 rounded-md ${
        dragging ? "border-sky-500 bg-sky-50" : "border-slate-300 bg-white"
      }`}
      onDragOver={handleDragOver}
      onDrop={handleOnDrop}
      onDragLeave={handleDragLeave}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full p-4 space-y-4 text-center">
        <label className="inline-flex items-center justify-center px-4 py-2 text-lg font-semibold text-white bg-orange-500 rounded-md cursor-pointer hover:bg-orange-600">
          {processing ? "Processing..." : "Upload"}
          <input
            type="file"
            onChange={handleFileChange}
            onClick={makeFileNull}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </label>
        <span id="file-name" className="text-sm text-slate-500">
          {files ? `${files.name} uploaded` : "No files uploaded"}
        </span>
      </div>
    </div>
  );
};

export default Upload;
