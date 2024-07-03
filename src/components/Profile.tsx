"use client"
import Image from "next/image";

type ImgProps = {
    src: string;
}

type User = {
  img: ImgProps
  name: string
}

const Profile = ({ img, name }: User) => {
  return (
    <div className="font-times w-64 flex flex-col space-y-4 h-56 items-center bg-slate-600 rounded-md mt-9 mb-8 pt-5">
        <Image
          src={img.src}
          width={100}
          height={100}
          alt="default profile picture"
        />
        <div className="text-center text-white text-2xl">{name}</div>
      </div>
  )
}

export default Profile;