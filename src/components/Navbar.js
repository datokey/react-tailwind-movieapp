import { Link } from "react-router-dom";
import Search from "./SearchBar";
import GenreOption from "./GenreOption";
import Logo from "./Logo";
import {SearchContext} from "../contexts/SearchContext";
import { useContext } from "react";

const Navbar = () => {

  const {HideGenre} = useContext(SearchContext);


  return (
    //navbar
    <div className="border-b text-white flex justify-between items-center bg-black h-20 border-gray-600 shadow-2xl">
      {/* isi navbar */}
      <div className="flex space-x-5 h-full justify-center items-center">
          <div  onClick={HideGenre} className="ml-5">
            <Logo/>
          </div>
          <Link onClick={HideGenre} to="/" className="p-4 font-semibold flex items-center justify-center h-full hover:text-black hover:bg-white">
            Home
          </Link>
          <GenreOption/>
      </div>
      <div  onClick={HideGenre} className="p-3">
        <Search/>
      </div>
    </div>

    // <div className="flex justify-center px-4 border-b border-gray-600 shadow-2xl">
    //   <div className="p-3 space-x-3 flex">
    //     <Link to="/" className="border-r-2 border-gray-700 pr-3">
    //       <h3 className="hover:bg-gray-700 hover:text-gray-200 rounded-xl p-1 ">
    //         Home
    //       </h3>
    //     </Link>
    //     <div className="border-r-2 border-gray-700 pr-3 ">
    //         <GenreOption/>
    //     </div>
    //     <Link to="/create" className=" pr-3 ">
    //       <h3 className="hover:bg-gray-700 hover:text-gray-200 rounded-xl p-1 ">
    //         Create
    //       </h3>
    //     </Link>
    //     <Search/>
    //   </div>
    // </div>
  );
};

export default Navbar;
