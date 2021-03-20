import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

const GenreOption = () => {
  const { TogleView } = useContext(SearchContext);
  const handleButton=()=>{
      TogleView();
  }

  return (
    <button
      onClick={handleButton}
      className="p-4 font-semibold flex items-center focus:outline-none
        justify-center h-full hover:text-black hover:bg-white"
    >
      Genre
    </button>
  );
};

export default GenreOption;
