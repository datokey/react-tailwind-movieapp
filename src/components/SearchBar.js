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
      <form>
         <input
          type="text"
          value={search}
          className="text-xs p-2"
          onChange={(e) => setSearch(e.target.value)} 
        />

        <input type="submit"  onClick={handleButton} value="Cari" className="cursor-pointer 
         p-2 bg-blue-300 rounded" />
      </form>
       
      
    </div>
  );
};

export default Search;
