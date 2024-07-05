"use client";
import Upload from "@/components/Upload";
import Search from "@/components/Search";
import Posts from "@/components/posts/Posts";
import { useState } from "react";
import { FC } from "react";

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
}

const UploadSearchPosts: FC<Props> = ({ BASE_URL, VERSION, images }) => {
  const [files, setFiles] = useState<File | null>(null);
  const [imageList, setImageList] = useState(images);

  return (
    <>
      <Upload BASE_URL={BASE_URL} VERSION={VERSION} files={files} setFiles={setFiles} 
      imageList={imageList} setImageList={setImageList}
      />
      <Search />
      <Posts
        images={images}
        BASE_URL={BASE_URL}
        VERSION={VERSION}
        files={files}
        imageList={imageList}
        setImageList={setImageList}
      />
    </>
  );
};

export default UploadSearchPosts;
