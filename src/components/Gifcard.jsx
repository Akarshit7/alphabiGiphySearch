import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";


const Gifcard = ({ addToFavorite,removeFromFavourites,item,username = "@defaultName" }) => {
  const gifUrl = item.images.original.url;
  const title = item.title;
  const alt = item.title;
  const {favorites}  = useSelector((state)=>state.favorites)
  const isItemFavorite = favorites.find((elements)=>elements.id===item.id)
  return (
    <div className="h-80 flex flex-col justify-between p-2 gap-2">
      <div className="w-[354px] h-[236px] rounded-2xl overflow-hidden border-2">
        <img className="w-full h-full object-cover" src={gifUrl} alt={alt} />
      </div>
      <div className="w-full flex justify-between  ">
        <div className="flex-grow ">
          <p className="text-black font-bold ">{title}</p>
          <p className="font-bold text-gray-300 ">{username}</p>
        </div>
        <span>
          {
            
            isItemFavorite ? <FaStar className="fill-yellow-500" onClick={()=>removeFromFavourites(item)}/> :<FaRegStar className="fill-yellow-500" onClick={()=>{addToFavorite(item)}}/>
            
          }
          </span>
      </div>
    </div>
  );
};

export default Gifcard;
