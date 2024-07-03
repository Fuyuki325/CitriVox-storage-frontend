"use client"
import Image from "next/image";
import defaultPfp from "@/../../public/profile_default.png";

type ImgProps = {
    src: string;
}

type User = {
  img: ImgProps
  name: string
}

const Profile = ({ img, name }: User) => {
  return (
    <div className="font-times w-64 flex flex-col space-y-4 h-56 items-center bg-slate-600 rounded-md mt-9 mb-8 pt-5 shadow-lg shadow-orange-400">
        <Image
          src={img.src || defaultPfp}
          width={100}
          height={100}
          alt="default profile picture"
        />
        <div className="text-center text-white text-2xl font-semibold">{name}</div>
      </div>
  )
}

export default Profile;