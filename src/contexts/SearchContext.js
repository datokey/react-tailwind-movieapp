import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SearchContext = createContext();

const SearchContextProvider = (props) =>{
    const [isLoading, setLoading] = useState(false);
    const [isDataAvail, setDataAvail] = useState(false)
    const [movie, setMovie] = useState(null);
    const url = "https://api-filmapik.herokuapp.com/search?q=";
    // https://api-filmapik.herokuapp.com/search?q=avenger
    const searching = (title) =>{
       setLoading(true);
       setDataAvail(false);
       axios.get(url + title)
       .then((res)=>{
            if (res.data.length === "0"){
                setLoading(false);
                setMovie(null);
                setDataAvail(false);
                console.log('tidak ada data')
            }else{
                setLoading(false);
                setMovie(res.data.result);
                setDataAvail(true);
                console.log("ada data");
            }

           console.log("judul :===>"+title)
           console.log("data contexts ==>"+res.data);
       })
    };
    return(
        <SearchContext.Provider value={{movie, searching, isLoading , isDataAvail}}>
            {props.children}
        </SearchContext.Provider>
    )
}
export default SearchContextProvider;