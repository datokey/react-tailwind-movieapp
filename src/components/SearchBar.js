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
          className="text-xs p-2 rounded-xl rounded-r-none"
          onChange={(e) => setSearch(e.target.value)} 
        />
        <input type="submit"  onClick={handleButton} value="Cari"
         className="cursor-pointer 
         p-2 bg-blue-400 rounded font-semibold"  />
      </form>
       
      
    </div>
  );
};

export default Search;
