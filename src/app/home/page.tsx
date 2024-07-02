import Image from "next/image";
import pfp from "@/../../public/profile_default.png";

const Home = () => {
  return (
    <div className="flex flex-col bg-slate-400 h-screen items-center">
      <div className="font-times w-64 flex flex-col space-y-4 h-56 items-center bg-slate-600 rounded-md mt-9 mb-8 pt-5">
        <Image 
          src={pfp}
          width={100}
          height={100}
          alt="default profile picture"
        />
        <div className="text-center text-white text-2xl">Fuyuki Malahom</div>
      </div>
      <div className="flex flex-col w-[50%] h-56 outline-dashed outline-2 outline-offset-2">
        <div className="relative flex justify-center items-center w-full h-full">
        <label className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-violet-700 bg-orange-500 rounded-full cursor-pointer hover:bg-orange-600">
      Upload
      <input type="file" className="absolute inset-0 w-full h-full bg-black opacity-0 cursor-pointer" onchange="updateFileName(event)" />
    </label>
    
         
        </div>
      </div>
    </div>
  )
}

export default Home;