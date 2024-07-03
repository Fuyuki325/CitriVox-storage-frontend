import Image from "next/image";
import Logo from "@/../../public/CitriVox_PNG.png";

const Posts = () => {
  return (
    <>
      <div className="flex w-[70%] font-times text-4xl">Posts</div>
      <div className="grid grid-cols-3 w-[70%] gap-4">
        <Image 
          src={Logo}
          width={400}
          alt="CitriVox Logo"
        />
        <Image 
          src={Logo}
          width={400}
          alt="CitriVox Logo"
        />
        <Image 
          src={Logo}
          width={400}
          alt="CitriVox Logo"
        />
        <Image 
          src={Logo}
          width={400}
          alt="CitriVox Logo"
        />
        <Image 
          src={Logo}
          width={400}
          alt="CitriVox Logo"
        />
        <Image 
          src={Logo}
          width={400}
          alt="CitriVox Logo"
        />
      </div>
    </>
  );
};

export default Posts;
