import { Link } from "react-router-dom";
import Search from "./SearchBar";
import GenreOption from "./GenreOption";

const Navbar = () => {
    return (
      <div className="flex justify-center px-4 py-1 border-b border-gray-600 shadow-2xl">
        <div className="p-3 space-x-3 flex">
          <Link to="/" className="border-r-2 border-gray-700 pr-3">
            <h3 className="hover:bg-gray-700 hover:text-gray-200 rounded-xl p-1 ">
              Home
            </h3>
          </Link>
          <div className="border-r-2 border-gray-700 pr-3 ">
            <h3 className="hover:bg-gray-700 hover:text-gray-200 rounded-xl p-1">
              <GenreOption/>
            </h3>
          </div>
          <Link to="/create" className=" pr-3 ">
            <h3 className="hover:bg-gray-700 hover:text-gray-200 rounded-xl p-1 ">
              Create
            </h3>
          </Link>
          <Search/>
        </div>
      </div>
    );
}
 
export default Navbar;