import React from 'react'
import bgImage from "../Assets/background.jpg";

const Home = () => {
  return (
    <div >
        <div className="bg-nft bg-cover h-screen flex flex-col justify-center items-center">
          {/* <img src={bgImage} /> */}
          <div className=' '>
            <span className='bg-gray-600 h-fit text-white text-5xl'>NFTify Your Products Today!</span>
            <button>Join Us</button>
          </div>
        </div>
    </div>
  )
}

export default Home;  