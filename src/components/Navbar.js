import { Link } from "react-router-dom";
import Search from "./SearchBar";
import GenreOption from "./GenreOption";
import Logo from "./Logo";
import {SearchContext} from "../contexts/SearchContext";
import { useContext } from "react";
import Menu from "./Menu";

const Navbar = () => {

  const {HideGenre} = useContext(SearchContext);


  return (
    <div className="flex flex-col"> 
      //navbar
      <div className="flex items-center h-20 text-white bg-black border-b border-gray-600 shadow-2xl sm:flex-row sm:justify-between">
        {/* isi navbar */}
        <div className="flex items-center justify-start w-full h-full sm:space-x-5 sm:justify-center">
          <div onClick={HideGenre} className="p-4 ml-1 sm:ml-5 sm:p-2">
            <Logo />
          </div>
          <Link
            onClick={HideGenre}
            to="/"
            className="items-center justify-start hidden h-full font-semibold sm:flex sm:p-4 hover:text-black hover:bg-white"
          >
            Home
          </Link>
          <GenreOption />
        </div>
        <div onClick={HideGenre} className="hidden p-3 sm:flex ">
          <Search />
        </div>
        <div className="block sm:hidden">
          <Menu />
        </div>
      </div>
      <div className="grid-rows-3 bg-green-400 ">
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
};

export default Navbar;
