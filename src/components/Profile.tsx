"use client";
import Image from "next/image";
import defaultPfp from "@/../../public/profile_default.png";

type ImgProps = {
  src: string;
};

type User = {
  img: ImgProps;
  name: string;
};

const Profile = ({ img, name }: User) => {
  return (
    <div className="font-times w-64 flex flex-col items-center bg-white rounded-lg mt-9 mb-8 pt-5 pb-6 shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white">
        <Image
          src={img.src || defaultPfp}
          width={96}
          height={96}
          alt="default profile picture"
          className="object-cover"
        />
      </div>
      <div className="mt-4 text-center text-gray-800 text-xl font-bold">{name}</div>
    </div>
  );
};

export default Profile;
