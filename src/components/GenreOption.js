import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

const GenreOption = () => {
  const { isView, TogleView } = useContext(SearchContext);
  const handleButton=()=>{
      TogleView(!isView);
  }

  return (
    <div>
      <button 
      onClick={handleButton}
      className="bg-blue-200 p-3 h-full w-full">Genre</button>
    </div>
  );
};

export default GenreOption;
