"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const Profiles = ({ id, man }: any) => {
  return (
    <div className=" cursor-pointer w-full  flex items-center justify-center rounded-[10px] ">
      {man ? (
        <Image
          src={`/Images/male${id}-removebg-preview.png`}
          alt="Male Avatar"
          width={60}
          height={40}
          className="cursor-pointer my-2"
        />
      ) : (
        <Image
          src={`/Images/female${id - 3}-removebg-preview.png`}
          alt="Female Avatar"
          className="cursor-pointer my-2"
          width={60}
          height={40}
        />
      )}
    </div>
  );
};

export default function Home() {
  const data = [
    {
      id: 1,
      men: true,
    },
    {
      id: 2,
      men: true,
    },
    {
      id: 3,
      men: true,
    },
    {
      id: 4,
      men: false,
    },
    {
      id: 5,
      men: false,
    },
    {
      id: 6,
      men: false,
    },
  ];
  const [selected, setselected] = useState(-1);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);


const handleSubmit = () => {
    if(videoRef && videoRef.current && videoRef.current){
        videoRef.current.play();
    }
  setShowVideo(true);
};

  function handleVideoEnd() {
    // console.log(name, " ", avatar);

setShowSkip(true);

    window.open(`https://onthemoons.graphity.world/zgMc49t/calm-joyful-vacation?avatarId=${avatar}&name=${name}`);
    // setShowVideo(false);


  };

  return (
    <main className=" min-h-screen lg:py-0 py-10   selection:bg-[#C3972B] selection:text-white items-center  justify-end  lg:flex block  bg-black w-screen">
      <Image className="absolute  top-0 lg:left-[45%] right-0" src={"/Images/43.svg"} width={200} height={200} alt="" />
      <Image className="absolute  bottom-[0] hidden lg:block left-[0]" src={"/Images/42.svg"} width={200} height={200} alt="" />
      <div className="  min-w-[40%]  lg:px-20  px-4 ">
        <Image src={"/Images/Logo.svg"} className="mx-auto  lg:w-[85px] w-[60px] lg:mx-0" alt="Logo" width={85} height={85} />
        <div className="mt-2 lg:text-left text-center">
          <h1 className="text-white text-[20px] lg:text-[36px]  font-[900]">Saint Peter's Basilica</h1>
          <h2 className="opacity-50 font-[400]  text-white lg:text-[16px] text-[12px]">
            Quodcumque ligaveris super terram, erit ligatum etin coelis, et
            <br />
            quodcumque solveris super terram, erit solutum et in coelis
          </h2>
        </div>

        <Image src={"/Images/Church_Image2.png"} width={400} height={400} alt="Church Image " className="lg:hidden block mt-5 w-full h-auto" />

        <div className="mt-8">
          <label htmlFor="name" className="text-white">
            Your name
          </label>
          <div className="bg-[#1E1E1E] flex justify-start  gap-x-2 mt-1 py-3 pl-5 rounded-[16px] ">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M7.67384 18.0619C6.02327 19.0447 1.69559 21.0515 4.33144 23.5627C5.61903 24.7894 7.05307 25.6667 8.85601 25.6667H19.144C20.9469 25.6667 22.381 24.7894 23.6686 23.5627C26.3044 21.0515 21.9767 19.0447 20.3262 18.0619C16.4556 15.7572 11.5444 15.7572 7.67384 18.0619Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M19.25 7.58334C19.25 10.4828 16.8995 12.8333 14 12.8333C11.1005 12.8333 8.75 10.4828 8.75 7.58334C8.75 4.68385 11.1005 2.33334 14 2.33334C16.8995 2.33334 19.25 4.68385 19.25 7.58334Z" stroke="white" stroke-width="1.5" />
            </svg>
            <input
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter your name"
              className="bg-transparent selection:bg-transparent  w-full selection:bg-transparent focus:bg-transparent focus:outline-none placeholder:text-[16px] placeholder:text-white placeholder:text-opacity-50 text-white"
              id=""
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-white" htmlFor="avatar">
            Select avatar
          </label>

          <div className="bg-[#1E1E1E] py-4 rounded-[16px] px-4 my-1 grid grid-flow-row  justify-between w-full grid-cols-3 gap-5">
            {data.map((item: any, index: any) => {
              return (
                <div
                  onClick={() => {
                    setselected(index);
                    if (index <= 2) {
                      setAvatar(`male${index + 1}`);
                    } else {
                      setAvatar(`female${index - 2}`);
                    }
                  }}
                  className={selected == index ? "bg-[#C3972B] rounded-[10px] text-white " : "bg-white  rounded-[10px] text-black"}
                  key={index}
                >
                  <Profiles man={item.men} id={item.id} />
                </div>
              );
            })}
          </div>
        </div>

        <button onClick={handleSubmit} className="w-full bg-[#C3972B] text-white  mt-5  py-3  rounded-[16px]  font-[900] text-[22px]">
          Let’s explore
        </button>
        </div>
      {/* {showVideo && ( */}
        <video onEnded={handleVideoEnd} ref={videoRef} className={!showVideo ? "hidden" : "fixed top-0 left-0 w-screen h-screen object-cover z-20"}>
          <source src="/Images/saint_peter_basilica.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

<button onClick={handleVideoEnd} className="absolute mt-[90vh] inset-0 mx-auto bg-[#C3972B] text-white py-3 rounded-[16px] font-[900] text-[22px] z-30 h-[80px] w-1/2 bottom-4" style={{display: showSkip ? 'block' : 'none'}}>
  Go to Church
</button>

      {/* )} */}
      <div className="w-1/2 lg:block hidden py-10  pl-20 pr-10 ">
        <Image src={"/Images/Church_Image.png"} alt="Church Image" width={500} height={500} className="w-full h-[90vh]" />
      </div>
    </main>
  );
}
