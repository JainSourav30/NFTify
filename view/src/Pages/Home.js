import React from "react";
import { FaGithub } from "react-icons/fa";
import One from "../Assets/1.png";
import Two from "../Assets/2.png";
import Three from "../Assets/3.jpg";
import Four from "../Assets/4.jpg";

const Home = () => {
  const participantList = [
    { key: 1, prodName: "Raghav Khanna", github: 'https://github.com/raghav-khanna' },
    { key: 2, prodName: "Pranav Chatur", github: 'https://github.com/DarkMenacer' },
    { key: 3, prodName: "Vatsal Mehta", github: 'https://github.com/Vatsal32'},
    { key: 4, prodName: "Sourav Jain", github: 'https://github.com/JainSourav30' },
  ];

  return (
    <div>
      <div className="bg-nft bg-cover h-screen flex flex-col justify-center items-center">
        {/* <img src={bgImage} /> */}
        <div className="container py-40 px-10 mx-20 min-w-full flex flex-col items-start">
          <span className="bg-gray-600 h-fit text-white text-5xl text-left bg-opacity-20" style={{'textShadow':'3px 4px #FF00FF'}}>
            NFTify Your Products Today!
          </span>
        </div>
        <div className="container py-40 px-10 mx-20 min-w-full flex flex-col items-end w-10">
          <button className="bg-violet-400 text-white hover:bg-violet-900 text-4xl font-bold py-5 px-5 mx-20 rounded-3xl">
            Join Us
          </button>
        </div>
      </div>
      <hr />

      <div className="bg-gray-300 p-2">
        <div className="w-screen">
          <div className="grid lg:grid-cols-2 lg:gap-2 md:grid-cols-2  sm:grid-cols-1  m-5">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-auto">
                  <img className=" rounded-lg" src={One} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">Get onboard with us</h5>
                  </div>
                  </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-auto">
                  <img className=" rounded-lg" src={Two} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">Add your product</h5>
                  </div>
                  </div>
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-auto">
                  <img className=" rounded-lg" src={Three} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">Get your NFT</h5>
                  </div>
                  </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-auto">
                  <img className=" rounded-lg" src={Four} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">Verify your ownership</h5>
                  </div>
                </div>
          </div>
        </div>
      </div>
        <div className="bg-gradient-to-t from-blue-300 to-purple-500">
            <div className="border-2 border-black rounded-lg">
                <div className="text-2xl font-semibold text-center mb-5 mt-2">Our Team</div>
                    <div className="flex justify-around">
                        {participantList.map((participant, key)=>{
                            return (<div key={key} className="flex flex-col justify-center items-center mb-5" >
                                <a href={participant.github}><FaGithub size={40}/></a>
                                {participant.prodName}
                            </div>);
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
