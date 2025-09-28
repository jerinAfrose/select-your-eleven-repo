import React from "react";
import bannerImg from "../../assets/banner-main.png";
import bgImg from "../../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        height: "50vh",
      }}
      className="max-w-[1200px] mx-auto flex flex-col justify-center items-center bg-[#131313] my-8 rounded-2xl"
    >
      <img src={bannerImg} alt="" />
      <h2 className="text-white font-bold text-3xl mt-4">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h2>
      <p className="text-white mt-4">Beyond Boundaries Beyond Limits</p>
      {/* <button className="bg-[#e7fe29] mt-8 p-2 shadow-[inset_4px_4px_20px_0px_rgba(19,19,19,0.3)]">
        Claim Free Credit
      </button> */}
      <button className="mt-8 px-8 py-3 bg-[#EFFF00] text-black font-bold rounded-xl border-2 border-black shadow-[0_0_20px_rgba(0,0,0,0.7)] hover:bg-[#e6ff33] transition">
        Claim Free Credit
      </button>
    </div>
  );
};

export default Banner;
