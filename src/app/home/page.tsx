import pfp from "@/../../public/profile_default.png";
import Profile from "@/components/Profile";
import Upload from "@/components/Upload";
import Search from "@/components/Search";
import Image from "next/image";
import Logo from "@/../../public/CitriVox_PNG.png";
import Posts from "@/components/posts/Posts";
import axios from "axios";

const Home = async () => {
  // Send a GET request
  const response = await axios({
    method: 'get',
    url: `${process.env.BASE_URL}/v1/images`,
  });
  const images = response.data;

  return (
    <div className="flex flex-col bg-background items-center">
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
      <Posts 
        images={images}
        BASE_URL={process.env.BASE_URL}
        VERSION={process.env.VERSION}
      />
    </div>
  );
};

export default Home;
