const Upload = ({ handleDragOver, handleOnDrop}) => {
  return (
      <div className="flex flex-col w-[50%] h-56 outline-dashed hover:outline-sky-400 transition-all duration-200 outline-2 outline-offset-2"
        onDragOver={handleDragOver}
        onDrop={handleOnDrop}
      >
        <div className="relative flex justify-center items-center w-full h-full">
          <label className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-violet-700 bg-orange-500 rounded-full cursor-pointer hover:bg-orange-600">
            Upload
            <input
              type="file"
              className="absolute inset-0 w-full h-full bg-black opacity-0 cursor-pointer"
              onchange="updateFileName(event)"
            />
          </label>
          <span id="file-name" className="ml-4 text-sm text-slate-500">
            No files uploaded
          </span>
        </div>
      </div>
  )
}

export default Upload;