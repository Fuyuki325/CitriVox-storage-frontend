import Image from "next/image";
import pfp from "@/../../public/profile_default.png";
import Profile from "@/components/Profile";
import Upload from "@/components/Upload";

const Home = () => {

  const handleDragOver = (event) => {
    event.preventDefault();
  }

  const handleOnDrop = (event) => {
    event.preventDefault();
  }



  return (
    <div className="flex flex-col bg-slate-400 h-screen items-center">
      <Profile 
        img={pfp}
      />
      <Upload 

      />
    </div>
  );
};

export default Home;
