"use client";
import Image from "next/image";
import { FaTrashCan } from "react-icons/fa6";
import { FC } from "react";
import toast from "react-hot-toast";
import { FiCopy } from "react-icons/fi";
import axios from "axios";
import { useState, useEffect } from "react";

interface Image {
  id: InnerObject;
  name: InnerObject;
  quality: InnerObject;
}
interface InnerObject {
  S: string;
}
interface Props {
  images: Image[];
  BASE_URL: string | undefined;
  VERSION: string | undefined;
  files: File | null;
  setImageList: Function;
  imageList: Image[];
}

const Posts: FC<Props> = ({
  images,
  BASE_URL,
  VERSION,
  files,
  imageList,
  setImageList,
}) => {
  const copy = (imageid: string) => {
    navigator.clipboard.writeText(imageid);
    toast.success("Copied URL!");
  };

  const handleDelete = async (imageid: string) => {
    const response = await axios({
      method: "delete",
      url: `${BASE_URL}${VERSION}/image?imageid=${imageid}`,
    });
    setImageList(imageList.filter((image) => image.id.S !== imageid));
    toast.success("Deleted Image!");
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="font-times text-7xl pb-2">Posts</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[70%] gap-4 justify-items-center">
        {imageList.map((image) => (
          <div key={image.id.S} className="relative w-56 h-56 group">
            <Image
              src={`${BASE_URL}${VERSION}/image?imageid=${image.id.S}_low`}
              alt="image from db"
              fill={true}
              className="object-cover rounded-md group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-0 group-hover:opacity-80 group-hover:scale-105 transition-opacity duration-300"></div>
            <div
              className="opacity-0 group-hover:opacity-100 hover:bg-blue-500 hover:text-white active:bg-blue-200 absolute flex items-center justify-center top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 px-4 py-2 bg-white border-2 border-slate-400 rounded-md space-x-2 transition-all duration-300 hover:cursor-pointer"
              onClick={() => copy(image.id.S)}
            >
              <FiCopy className="text-2xl" />
              <div className="font-times font-bold text-xl">Copy</div>
            </div>
            <div
              className="opacity-0 group-hover:opacity-100 absolute flex items-center justify-center top-[10%] left-[90%] -translate-y-2/4 -translate-x-2/4 px-2 py-2 bg-white hover:bg-red-500 hover:text-white active:bg-red-200 active:border-red-200 border-red-500 border-2 rounded-md transition-all duration-300 hover:cursor-pointer"
              onClick={() => handleDelete(image.id.S)}
            >
              <FaTrashCan />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
