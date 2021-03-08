import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center shadow-2xl">
      <div>
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <Link to="/" className="bg-green-300 p-1 rounded-md">
          <div >Back to Home</div>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
