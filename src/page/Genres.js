import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { Link } from "react-router-dom";

const Genres = () => {
  const { isView } = useContext(SearchContext);
  // const [showList] = useState(true);

  const [sorted] = useState([
    "Action",
    "Advanture",
    "Comedy",
    "Fantasy",
    "Horror",
    "Romance",
    "Sci-fi",
    "Thriler",
    "Animation",
    "Sport",
    "Family",
    "War",
    "Western",
    "Drama",
    "History",
    "",
    "Hiaia"
    ]);

  const [alphabeth] = useState([
    { alpha: "A" },
    { alpha: "B" },
    { alpha: "C" },
    { alpha: "D" },
    { alpha: "E" },
    { alpha: "F" },
    { alpha: "G" },
    { alpha: "H" },
    { alpha: "I" },
    { alpha: "J" },
    { alpha: "K" },
    { alpha: "L" },
    { alpha: "M" },
    { alpha: "N" },
    { alpha: "N" },
    { alpha: "O" },
    { alpha: "P" },
    { alpha: "Q" },
    { alpha: "R" },
    { alpha: "S" },
    { alpha: "T" },
    { alpha: "U" },
    { alpha: "V" },
    { alpha: "W" },
    { alpha: "X" },
    { alpha: "Y" },
    { alpha: "Z" },
  ]);

  return (
    <div>
      {isView && (
        <div
          className="bg-blue-500 absolute p-3
     top-20 left-10 right-10 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-12">
            {alphabeth.map((character) => (
              <div>
                <p className="p-2 font-bold text-lg border-b-2 mr-16 ml-2 border-blue-300">
                  {character.alpha}
                </p>
                {sorted
                  .filter((name) => name.includes(character.alpha))
                  .sort()
                  .map((filteredName) => (
                    <ul>
                      <li className="p-2 rounded-lg hover:bg-blue-600">
                        <Link to={"Search/genre/"+filteredName}>{filteredName}</Link >
                      </li>
                    </ul>
                  ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

    //   <div>
    //     {isView && (
    //       <div
    //         className="bg-blue-500 absolute
    //         top-20 left-1/3 rounded-2xl rounded-tr-none shadow-2xl overflow-hidden
    //     "
    //       >
    //         {ListGenre.map((m) => (
    //           <div className="flex justify-between space-x-6">
    //             <div>
    //               <Link to="#" className="p-8 hover:bg-blue-600">
    //                 {m.genre}
    //               </Link>
    //             </div>
    //             <div>
    //               <Link to="#" className="p-8 hover:bg-blue-600">
    //                 {m.genre}
    //               </Link>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     )}
    //   </div>
  );
};

export default Genres;
