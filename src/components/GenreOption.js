import React, { useContext, useEffect, useState } from "react";
import { GenreContext } from "../contexts/GenreContext";

const GenreOption = () => {
  const { isView, TogleView } = useContext(GenreContext);
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
