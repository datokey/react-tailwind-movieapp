import { Link } from "react-router-dom";

const Body = ({ title, data }) => {
    return (
      <main className="md:p-20 p-1">
        <div
          className="font-extrabold text-2xl border-b-2 
               border-gray-200 flex justify-start"
        >
          {title}
        </div>
        <div className="py-3">
          <div className="grid md:grid-cols-4 py-1 px-3 gap-14">
            {data.map((movie) => (
              <div
                className="p-2 border-2 bg-white rounded-lg shadow-md hover:shadow-2xl"
                key={movie.id}
              >
                {/* <div className="py-24 px-20 text-center border border-red-700">Foto</div> */}
                <Link to={"/detail/" + movie.id}>
                  <img
                    src={movie.image}
                    alt={movie.image}
                    className="rounded w-full h-72 sm:h-42 object-cover"
                  />

                  <div className="text-right font-light">{movie.title}</div>
                  <div className="text-right font-extralight">
                    {movie.relase_date}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
}

export default Body;