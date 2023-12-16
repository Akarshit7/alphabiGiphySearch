import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Gifcard from "./Gifcard";
import axios from "axios";
import Loading from "./Loading";
import GifCotainer from "./GifCotainer";
import Pagination from "./Pagination";

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const getData = async (keyword) => {
    const data = await axios
      .post("/api/gifs", { searchKeyword: keyword })
      .then((res) => res.data);
    return data;
  };

  const onSearchInputChange = async (keyword) => {
    try {
      setLoading(true);
      const data = await getData(keyword);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log("error");
    }
  };

  const onSearch = async (event) => {
    const data = await getData(searchKeyword);
    setData(data);
  };

  return (
    <div className="w-screen p-4 rounded-xl drop-shadow-2xl bg-white mt-7 mx-32 z-1">
      <div className="flex flex-row items-center justify-center gap-x-4">
        <div className="flex-grow flex items-center bg-inputBox rounded-lg">
          <FaSearch className="text-2xl text-black mx-2" />
          <input
            className="w-full outline-none text-black font-bold
            px-2  bg-transparent p-5 rounded-lg  focus:border-black-400 placeholder:text-black-400 placeholder:font-bold"
            type="text"
            value={searchKeyword}
            onChange={(e) => {
              setSearchKeyword(e.target.value);
              onSearchInputChange(e.target.value);
            }}
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
        <>
          <div className="text-black font-sans font-bold text-xl">
            Your results for {`"${searchKeyword}"`}
          </div>
          {/* <GifCotainer data={data.data} /> */}
          <Pagination data={data.data} forSearch={true}/>
        </>
      )}
    </div>
  );
};

export default Search;
