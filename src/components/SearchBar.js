import { useState,} from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
   const [search, setSearch] =  useState('');  
   const history = useHistory();

   const handleButton = ()=>{
     if(search ===''){
       alert("masukan kata kunci")
     }else{
        history.push("/Search/"+search);
     }
   }

  return (
    <div>
        <input
          type="text"
          id="searchfield"
          value={search}
          className="text-xs"
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 "
        />

        <input type="submit" for="searchfield" onClick={handleButton} className="cursor-pointer 
         p-2 bg-blue-300 rounded" />
      
    </div>
  );
};

export default Search;
