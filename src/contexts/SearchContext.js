import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [isDataAvail, setDataAvail] = useState(true);
  const [movie, setMovie] = useState(null);

  //page pram
  const param = "&page=";

  //url search title
  const url = "https://api-filmapik.herokuapp.com/search?q=";

  //url search genre
  const genreUrl = "https://api-filmapik.herokuapp.com/category?search=";

  //togle view genre
  const [isView, setView] = useState(false);

  //page for search result
  const [page, setPage] = useState(1);

  //disable buton page
  const [isDisable, setDisable] = useState(true);

  //set Genre
  const [genre, setGenre] = useState("");

  // set maximal item yang ditampilkan
  const maxResult = "&maxResult=20";

  const searching = (title) => {
    setLoading(true);
    fetch(url + title, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Tidak Bisa Menampilkan Data");
        }
        return res.json();
      })
      .then((data) => {
        if (data.result === null || data.result === "") {
          setDataAvail(false);
        } else {
          setDataAvail(true);
          setMovie(data.result);
          setLoading(false);
          if (page === 1) {
            setDisable(true);
          } else {
            setDisable(false);
          }
        }
      })
      .catch((err) => {
        setLoading(false);
        setDataAvail(false);
        console.log(err.message);
      });
  };

  //searchiing genre moveies

  const Genre=(gen)=>{
        setGenre(gen);
    }

   useEffect(()=>{
        if(isDataAvail === false){
          setDataAvail(true)
        }
        console.log("use effect pencarian genre dijalankan")
        setLoading(true);
        fetch(genreUrl + genre + param + page + maxResult, {
          method: "GET",
        })
          .then((res) => {
            if (!res.ok) {
              throw Error("Tidak Bisa Menampilkan Data");
            }
            return res.json();
          })
          .then((data) => {
            if (data.result === null || data.result === "" || data.result["error"] ) {
              setDataAvail(false);
            } else {
              setDataAvail(true);
              setMovie(data.result);
              if (page === 1) {
                setDisable(true);
              } else {
                setDisable(false);
              }
            }

            console.log("loading berhenti");
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setDataAvail(false);
            console.log(err.message);
          });
   },[genre]) 

   
  //handel page change
  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };


  return (
    <SearchContext.Provider
      value={{
        movie,
        searching,
        isLoading,
        isDataAvail,
        isView,
        isDisable,
        nextPage,
        prevPage,
        page,
        Genre,
       
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
