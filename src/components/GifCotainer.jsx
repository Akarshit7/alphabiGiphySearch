import React from "react";
import Gifcard from "./Gifcard";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "@/lib/store/favourites";

const GifCotainer = ({data}) => {
  const dispatch = useDispatch();
  const addToFavorite = (item) => {
    dispatch(addItem(item));
  };
  const removeFromFavourites = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <>
      
      <div className="flex flex-wrap justify-around min-h-96">
        {data.map((item) => {
          return (
            <Gifcard
              addToFavorite={addToFavorite}
              removeFromFavourites={removeFromFavourites}
              item={item}
            />
          );
        })}
      </div>
    </>
  );
};

export default GifCotainer;
