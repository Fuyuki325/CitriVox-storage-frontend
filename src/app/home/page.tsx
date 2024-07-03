import Image from "next/image";
import pfp from "@/../../public/profile_default.png";
import Profile from "@/components/Profile";
import Upload from "@/components/Upload";

const Home = () => {



  return (
    <div className="flex flex-col bg-slate-400 h-screen items-center">
      <Profile 
        img={pfp}
        name="Fuyuki Malahom"
      />
      <Upload />
    </div>
  );
};

export default Home;
