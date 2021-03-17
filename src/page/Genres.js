import React, { useContext, useEffect, useState } from "react";
import { GenreContext } from "../contexts/GenreContext";
import { Link } from "react-router-dom";

const Genres = () => {
  const { ListGenre, isView } = useContext(GenreContext);
  // const [showList] = useState(true);

  const [sorted, setSorted] = useState( ['James', 'John', 'Paul','Asu', 'Aas','Ringo', 'George'])
 
  return (
    <div>
       {sorted
        .filter((name) =>name.includes("A")).sort()
        .map((filteredName) => (
          <li>{filteredName}</li>
        ))}
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
