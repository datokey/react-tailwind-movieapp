import { useState,} from "react";
import { Link } from "react-router-dom";

const Search = () => {
   const [search, setSearch] =  useState('');  
  return (
    <div>
        <input
          type="text"
          value={search}
          className="text-xs"
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 "
        />
        <Link to={"/Search/"+search} className="cursor-pointer 
         p-2 bg-blue-300 rounded" > Cari</Link>
      
    </div>
  );
};

export default Search;
