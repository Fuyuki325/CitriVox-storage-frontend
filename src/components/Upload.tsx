"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const Upload = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [dragging, setDragging] = useState<Boolean | null>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleOnDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    if (event.dataTransfer.files.length > 1) {
      toast.error("Only 1 file please")
      return
    }
    setFiles(event.dataTransfer.files);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(event.target.files);
    }
  };

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
          Upload
          <input
            type="file"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </label>
        <span id="file-name" className="text-sm text-slate-500">
          {files ? `${files[0].name} uploaded` : "No files uploaded"}
        </span>
      </div>
    </div>
  );
};

export default Upload;
