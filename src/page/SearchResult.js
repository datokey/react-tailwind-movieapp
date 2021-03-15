 import React,{useContext, useEffect}from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { useParams } from "react-router-dom";

 const SearchResult = () => {
     const { searching, movie, isLoading, isDataAvail } = useContext(SearchContext);
     const { title } = useParams();

     useEffect(() => {
         searching(title);
        console.log("t====> "+title);
        console.log("m====> "+movie);
     }, [title]);

     return (
       <div className="flex justify-center items-center flex-col">
         {isLoading && <div>---Loading---</div>}
         {!isDataAvail && !isLoading && <div>Film Tidak Ditemukan </div>}
         {!isLoading && isDataAvail && movie && (
           <div>
             {movie.map((m) => (
               <ul>
                 <li>{m.title}</li>
               </ul>
             ))}
           </div>
         )}
       </div>
     );
 }
  
 export default SearchResult;