import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GenreContext } from "../contexts/GenreContext";
import { SearchContext } from "../contexts/SearchContext";

const GenreOption = () => {
 const {ListGenre} = useContext(GenreContext);
 const History = useHistory();


 const handleChange=(e)=>{
    e.preventDefault();
    History.push("/search/genre/"+e.target.value);
 }

  return (
    <div className="hidden sm:flex">
      <select
        className="px-5 font-semibold text-white bg-black"
        onChange={handleChange}
      >
        <option className="p-2 font-semibold" selected>
          Genre
        </option>
        {ListGenre.map((lg) => (
          <option className="p-2 font-semibold" value={lg.value} key={lg.id}>
            {lg.genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreOption;
