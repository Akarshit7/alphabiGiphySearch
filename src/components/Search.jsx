import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Gifcard from "./Gifcard";
import axios from "axios";
import Loading from "./Loading";
import GifCotainer from "./GifCotainer";

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const onSearchInputChange = async (event) => {
    setSearchKeyword(event.target.value);
    try {
      setLoading(true);
      const data = await axios
        .post("/api/gifs", { searchKeyword })
        .then((res) => {setData(res.data)})
      setLoading(false);
      console.log(loading);
    } catch (error) {
      console.log("error");
    }
  };

  const onSearch = (event) => {};

  return (
    <div className="w-screen p-4 rounded-xl drop-shadow-2xl bg-white mt-10 mx-32">
      <div className="flex flex-row items-center justify-center gap-x-4">
        <div className="flex-grow flex items-center bg-inputBox rounded-lg">
          <FaSearch className="text-2xl text-black mx-2" />
          <input
            className="w-full outline-none text-black font-bold
            px-2  bg-transparent p-5 rounded-lg  focus:border-black-400 placeholder:text-black-400 placeholder:font-bold"
            type="text"
            value={searchKeyword}
            onChange={onSearchInputChange}
            id="searchText"
            placeholder="Enter gif name or keywords..."
          />
        </div>
        <button
          className="bg-black p-5 font-bold rounded-lg"
          type="submit"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
      {searchKeyword && loading ? <Loading /> : ""}
      {searchKeyword && !loading && (
        <GifCotainer data={data} />
      )}
    </div>
  );
};

export default Search;
