import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SearchContext = createContext();

const SearchContextProvider = (props) =>{
    const [movie, setMovie] = useState(null);
    const url = "https://api-filmapik.herokuapp.com/search?q=";
    // https://api-filmapik.herokuapp.com/search?q=avenger
    const searching = (title) =>{
       axios.get(url + title)
       .then((res)=>{
           setMovie(res.data.result);
           console.log("judul :===>"+title)
           console.log("data contexts ==>"+res.data);
       })
    };
    return(
        <SearchContext.Provider value={{movie, searching}}>
            {props.children}
        </SearchContext.Provider>
    )
}
export default SearchContextProvider;