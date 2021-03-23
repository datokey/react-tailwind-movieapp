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

  //searcing title
  // const searching = (title) =>{
  //    setLoading(true);
  //    setDataAvail(false);
  //    axios.get(url + title )
  //    .then((res)=>{
  //         if (res.data.length === "0"){
  //             setLoading(false);
  //             setMovie(null);
  //             setDataAvail(false);
  //             console.log('tidak ada data')
  //         }else{
  //             setLoading(false);
  //             setMovie(res.data.result);
  //             setDataAvail(true);
  //             if(page===1){
  //                 setDisable(true)
  //             }else{
  //                 setDisable(false)
  //             }
  //             console.log("ada data");
  //         }

  //        console.log("judul :===>"+title)
  //        console.log("data contexts ==>"+res.data);
  //    })
  // };

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

  //togle hide or show genre
  const TogleView = () => {
    setView(!isView);
  };

  //hide genre list
  const HideGenre = () => {
    setView(false);
  };

  //searchiing genre moveies
//   const SearchGenre = (gen) => {
    // setGenre(gen);
    // setView(false);
    // setLoading(true);
    // axios.get(genreUrl + genre + param + page + maxResult)
    // .then((res) => {
    //     if (res.data.result === null || res.data.result === "") {
    //       setDataAvail(false);
    //     } else {
    //       setLoading(false);
    //       setMovie(res.data.result);
    //       setDataAvail(true);
    //       if (page === 1) {
    //         setDisable(true);
    //       } else {
    //         setDisable(false);
    //       }
    //     }

    //     console.log("ada data" + res.data.result);
      
    // });
    
//   };

  const Genre=(gen)=>{
        setGenre(gen)
    }

   useEffect(()=>{
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
   },[genre]) 

   
  //handel page change
  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  // useEffect(()=>{
  //     setView(false);
  //     setLoading(true);
  //     setDataAvail(false);
  //     axios.get(genreUrl + genre + param + page + maxPage)
  //     .then((res) => {
  //       if (res.data.length === "0") {
  //         setLoading(false);
  //         setMovie(null);
  //         setDataAvail(false);
  //         console.log("tidak ada data");
  //       } else {
  //         setLoading(false);
  //         setMovie(res.data.result);
  //         setDataAvail(true);
  //         if (page === 1) {
  //           setDisable(true);
  //         } else {
  //           setDisable(false);
  //         }
  //         console.log("ada data");
  //       }
  //     });
  // },[genre, page])

  return (
    <SearchContext.Provider
      value={{
        movie,
        searching,
        isLoading,
        isDataAvail,
        TogleView,
        isView,
        isDisable,
        nextPage,
        prevPage,
        page,
        HideGenre,
        Genre,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
