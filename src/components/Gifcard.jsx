import React from "react";
import { FaRegStar } from "react-icons/fa";

const Gifcard = ({ gifUrl, title, alt, username = "@defaultName" }) => {
  return (
    <div className="h-80 flex flex-col justify-between p-2 gap-2">
      <div className="w-[354px] h-[236px] rounded-2xl overflow-hidden border-2 ">
        <img className="w-full h-full object-cover" src={gifUrl} alt={alt} />
      </div>
      <div className="w-full flex justify-between  ">
        <div className="flex-grow ">
          <p className="text-black font-bold ">{title}</p>
          <p className="font-bold text-gray-300 ">{username}</p>
        </div>
        <span className="align">
          
          <FaRegStar className="text-yellow-600" />
        </span>
      </div>
    </div>
  );
};

export default Gifcard;
