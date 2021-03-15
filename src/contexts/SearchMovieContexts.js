import React,{createContext, useState} from 'react';

export const SearchMovieContext = createContext();

const SearchMovieContextProvider = (props) => {

    const [searchData, setSearchData] = useState(null);
    const [nilai1, setNilai1] = useState(1);
    // const getData = () => {
    //   fetch("https://api-filmapik.herokuapp.com/search?q=marvel")
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       setSearchData(data.result);
    //       console.log(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };

    const getData=() =>{
      setNilai1(nilai1+20);
    }


    const ShowSearch =()=>{
        return searchData
    }

    
    return(
        <SearchMovieContext.Provider value={getData, ShowSearch}>
            {props.children}
        </SearchMovieContext.Provider>
    )
}

export default SearchMovieContextProvider;