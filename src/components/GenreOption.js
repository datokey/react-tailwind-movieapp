import React, { useContext, useEffect, useState } from "react";
import { GenreContext } from "../contexts/GenreContext";
import { SearchContext } from "../contexts/SearchContext";

const GenreOption = () => {
 const {ListGenre} = useContext(GenreContext)

 const handleChange=(e)=>{
    e.preventDefault();
    
    console.log("value===> "+e.target.value)
 }

  return (
    <div>
      <select className="px-5 font-semibold text-white bg-black" onChange={handleChange}>
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
