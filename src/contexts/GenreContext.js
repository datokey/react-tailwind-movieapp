import React, { createContext, useState } from "react";

export const GenreContext = createContext();

const GenreContextProvider = (props) => {

  const [ListGenre] = useState([
    {id:1, genre:"Genre", value:""},
    { id: 11, genre: "Action" ,value:"Action"},
    { id: 12, genre: "Comedy",value:"Comedy" },
    { id: 13, genre: "Drama",value:"Drama" },
    { id: 14, genre: "Fantasy",value:"Fantasy" },
    { id: 15, genre: "Horor",value:"Horor" },
    { id: 16, genre: "Mystery" ,value:"Mystery"},
    { id: 17, genre: "Thriller" ,value:"Thriller"},
    { id: 18, genre: "Romance",value:"Romance" },
    { id: 19, genre: "History",value:"History" },
    { id: 20, genre: "Western" ,value:"Western"},
    { id: 21, genre: "Sci-fi",value:"Sci-fi" },
    { id: 22, genre: "Animation",value:"Animasi" },
    { id: 23, genre: "War" ,value:"war"},
  ]);

  return (
    <GenreContext.Provider
      value={{
        ListGenre,
      }}
    >
      {props.children}
    </GenreContext.Provider>
  );
};

export default GenreContextProvider;
