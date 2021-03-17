import React, { useContext, useEffect } from "react";
import {GenreContext} from '../contexts/GenreContext';


const Genres = () => {

    const {ListGenre} = useContext(GenreContext);

    useEffect(() => {
        console.log(ListGenre)
    });
    
    return (
        <div className="flex justify-center items-center">
           <div className="flex flex-col space-y-5">
                <h1 className="text-2x">LIST GENRE</h1>
            {ListGenre.map((lg)=>(
                <ul key={lg.id}>
                    <li>{lg.genre}</li>
                </ul>
            ))}
           
           </div>
        </div>
    );
}

export default Genres;
