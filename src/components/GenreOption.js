import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";

const GenreOption = () => {
  const { isView, TogleView } = useContext(SearchContext);
  // const [showList] = useState(true);

  const handleButton=()=>{
      TogleView(!isView);
  }

  return (
    <div>
      <button 
      onClick={handleButton}
      className="bg-blue-800 p-3">Genre</button>
    </div>
  );
};

export default GenreOption;
