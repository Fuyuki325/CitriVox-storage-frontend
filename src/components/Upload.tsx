"use client"

import { useState } from "react"

const Upload = () => {
  const [files, setFiles] = useState<FileList | null>(null);

  const [dragging, setDragging] = useState<Boolean | null>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  }

  const handleOnDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
    setDragging(false);
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(event.target.files);
    }
  }

  return (
      <div className={`font-times flex flex-col w-[50%] h-56 outline-dashed hover:outline-sky-500 ${dragging ? 'outline-sky-500' : ''} outline-4 transition-all duration-200 outline-offset-2 mb-10`}
        onDragOver={handleDragOver}
        onDrop={handleOnDrop}
        onDragLeave={handleDragLeave}
      >
        <div className="relative flex justify-center items-center w-full h-full">
          <label className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-violet-700 bg-orange-500 rounded-full cursor-pointer hover:bg-orange-600">
            Upload
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full bg-black opacity-0 cursor-pointer"
              
            />
          </label>
          <span id="file-name" className="ml-4 text-sm text-slate-500">
            {files ? `${files.length} file(s) uploaded` : 'No files uploaded'}
          </span>
        </div>
      </div>
  )
}

export default Upload;