import pfp from "@/../../public/profile_default.png";
import Profile from "@/components/Profile";
import Upload from "@/components/Upload";
import Search from "@/components/Search";
import Image from "next/image";
import Logo from "@/../../public/CitriVox_PNG.png";
import Posts from "@/components/posts/Posts";

const Home = () => {
  return (
    <div className="flex flex-col bg-slate-400 h-screen items-center">
      <div className="bg-white w-full flex flex-col items-center justify-center mt-6 pb-1">
        <Image 
          src={Logo}
          width={400}
          alt="CitriVox"
        />
        <div className="font-times text-3xl font-bold text-gray-500 text-center">Storage System</div>
      </div>
      <Profile 
        img={pfp}
        name="Fuyuki Malahom"
      />
      <Upload />
      <Search />
      <Posts />
    </div>
  );
};

export default Home;
