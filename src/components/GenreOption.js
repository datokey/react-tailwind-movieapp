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
      className="flex items-center justify-center h-full p-4 font-semibold focus:outline-none hover:text-black hover:bg-white"
    >
      Genre
    </button>
  );
};

export default GenreOption;
