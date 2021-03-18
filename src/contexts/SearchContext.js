import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const SearchContext = createContext();

const SearchContextProvider = (props) =>{
    const [isLoading, setLoading] = useState(false);
    const [isDataAvail, setDataAvail] = useState(false)
    const [movie, setMovie] = useState(null);

    //page pram 
    const param = "&page=";
    
    //url search title
    const url = "https://api-filmapik.herokuapp.com/search?q=";
    
    //url search genre
    const genreUrl = "https://api-filmapik.herokuapp.com/category?search=";
   
    //togle view genre
    const [isView, setView]=useState(false);
    
     //page for search result
     const [page, setPage] = useState(1);

    //disable buton page
    const [isDisable, setDisable] = useState(true)

     //searcing title
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
                if(page===1){
                    setDisable(true)
                }else{
                    setDisable(false)
                }
                console.log("ada data");
            }

           console.log("judul :===>"+title)
           console.log("data contexts ==>"+res.data);
       })
    };

    //togle hide or show genre
    const TogleView =()=>{
        setView(!isView)
    }

    //searchiing genre moveies
    const SearchGenre=(genre)=>{
        setView(false)
        setLoading(true);
        setDataAvail(false);
        axios.get(genreUrl+genre+param+page)
            .then((res)=>{
                if (res.data.length === "0") {
                  setLoading(false);
                  setMovie(null);
                  setDataAvail(false);
                  console.log("tidak ada data");
                } else {
                  setLoading(false);
                  setMovie(res.data.result);
                  setDataAvail(true);
                  if (page===1){
                      setDisable(true);
                  }else{
                      setDisable(false);
                  }
                  console.log("ada data");
                }
            })
    }


    //handel page 
    const nextPage=()=>{
        setPage(page+1)
    }

    const prevPage=()=>{
        setPage(page-1)
    }

    return(
        <SearchContext.Provider value={{movie, searching, isLoading ,
         isDataAvail, SearchGenre, TogleView, isView, isDisable,
         nextPage, prevPage, page
         }}>
            {props.children}
        </SearchContext.Provider>
    )
}
export default SearchContextProvider;