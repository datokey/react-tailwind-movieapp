import { useState,} from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
   const [search, setSearch] =  useState('');  
   const history = useHistory();

   const handleButton = ()=>{
     if(search ===''){
       alert("masukan kata kunci")
     }else{
        history.push("/Search/title/"+search);
     }
   }

  return (
    <div>
      <form>
         <input
          type="text"
          value={search}
          className="p-2 text-xs text-black rounded-r-none focus:outline-none rounded-xl"
          onChange={(e) => setSearch(e.target.value)} 
        />
        <input type="submit"  onClick={handleButton} value="Cari"
         className="p-2 font-semibold bg-blue-400 rounded cursor-pointer"  />
      </form>
       
      
    </div>
  );
};

export default Search;
