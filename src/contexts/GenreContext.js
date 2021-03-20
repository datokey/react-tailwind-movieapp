import React, { createContext, useState } from 'react';
import axios from 'axios';

export const GenreContext = createContext();

const GenreContextProvider = (props) =>{
    const [genre, setGenre] = useState('');
    const [param] = useState('&page=')
    const url = "https://api-filmapik.herokuapp.com/category?search=";
    // const [isView, setView] = useState(false)

    // const TogleView = (bol) =>{
    //   setView(bol);
    //   console.log(isView);
    //   console.log("props===> "+bol)
    // }

    const [ListGenre] = useState([
        {id:1, genre: "Action" },
        {id:12, genre: "Comedy" },
        {id:13, genre: "Drama" },
        {id:14, genre: "Fantasy" },
        {id:15, genre: "Horor" },
        {id:16, genre: "Mystery" },
        {id:17, genre: "Thriller" },
        {id:18, genre: "Romance" },
        {id:19, genre: "History" },
    ]);

    const SearchGenre = (genreSearch, page) =>{
       axios.get(url + genreSearch + param + page)
       .then((res) => {
         setGenre(res.data);
       }); 
    };

    return (
        <GenreContext.Provider value={{genre, SearchGenre,
         ListGenre}}>
            {props.children}
        </GenreContext.Provider>
    )

}

export default GenreContextProvider;
