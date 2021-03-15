 import React,{useContext, useEffect}from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { useParams } from "react-router-dom";

 const SearchResult = () => {
     const { searching, movie } = useContext(SearchContext);
     const { title } = useParams();

     useEffect(() => {
         searching(title);
        console.log("t====> "+title);
        console.log("m====> "+movie);
     }, [title]);

     return movie !== null ? (
       <div className="flex justify-center items-center flex-col">
            {movie.map((m)=>(
                <a href="">{m.title}</a>
            ))}
       </div>
     ):(
         <div className="flex justify-center items-center">
              Film tidak ditemukan
              </div>
     )
 }
  
 export default SearchResult;