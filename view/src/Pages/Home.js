import React from "react";
import testImage from "../Assets/test_img.jpg";

const Home = () => {
  const participantList = [
    { key: 1, prodName: "Raghav Khanna", prodImg: testImage },
    { key: 2, prodName: "Pranav Chatur", prodImg: testImage },
    { key: 3, prodName: "Vatsal Mehta", prodImg: testImage },
    { key: 4, prodName: "Sourav Jain", prodImg: testImage },
  ];

  return (
    <div>
      <div className="bg-nft bg-cover h-screen flex flex-col justify-center items-center">
        {/* <img src={bgImage} /> */}
        <div className="container py-40 px-10 mx-20 min-w-full flex flex-col items-start">
          <span className="bg-gray-600 h-fit text-white text-5xl text-left">
            NFTify Your Products Today!
          </span>
        </div>
        <div className="container py-40 px-10 mx-20 min-w-full flex flex-col items-end w-10">
          <button className="bg-violet-400 text-white hover:bg-violet-200 text-4xl font-bold py-5 px-5 mx-20 rounded">
            Join Us
          </button>
        </div>
      </div>
      <hr />

      <div className="bg-gray-100 p-2">
        <div className="text-3xl font-semibold text-center">Who are we?</div>
        <div className="w-screen">
          <div className="grid lg:grid-cols-2 lg:gap-2 md:grid-cols-2  sm:grid-cols-1  m-5">
            {participantList.map((prod, key) => {
              return (
                <div
                  key={key}
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-auto"
                >
                  <img className=" rounded-lg" src={prod.prodImg} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">
                      {prod.prodName}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-1 m-5">
        <div className=" h-96 w-4/5 col-span-2  bg-nft bg-contain">
          {/* <img src={bgImage} className="h-15 w-15" /> */}
        </div>
        <div className="h-15 w-15 col-span-2">
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            itaque, laborum laudantium quo, ex alias eum fuga velit, quaerat
            nisi optio autem. Accusantium beatae consectetur repellendus
            recusandae dignissimos, ea velit.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
