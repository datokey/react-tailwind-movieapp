import React, { useState} from "react";
import { Link } from "react-router-dom";
import useFetchListMovie from "../hook/useFetchListMovie";

const Body = () => {
  const [page, setPage] = useState(1);
  const [title] = useState(null);
  const [initialPathName] = useState("latest");
  const [initialParamater] = useState("?page=");

  const { dataMovie, isError, isEnable, isLoading } = useFetchListMovie(
    initialPathName,
    initialParamater,
    page
  );

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="md:p-32 sm:p-16 p-9 flex justify-center items-center">
      {isError && <div>ERROR </div>}
      {isLoading && <div>loading......</div>}
      {!isLoading && dataMovie && (
        <div className="py-9">
          <div className="flex ">
            <div className="md:text-2xl text-lg font-bold mb-3">{title}</div>
            <div className="ml-10"></div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
            {dataMovie.map((m) => (
              <div className="rounded-lg shadow-2xl bg-white overflow-hidden">
                <div className="flex flex-col">
                  <div>
                    <img
                      className="w-full max-h-72 sm:h-42"
                      src={m.thumbnailPotrait}
                      alt={m.title}
                    />
                  </div>
                  <div className="flex justify-end p-3 text-right font-bold text-lg h-16">
                    {m.title}
                  </div>
                  <div className="flex justify-between mt-4">
                    <a
                      className="w-1/2 py-3 border-t-2 border-r-2 border-black text-xl flex justify-center items-center"
                      href={m.detail.trailer}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Trailer
                    </a>
                    <Link
                      className="w-1/2 py-3 text-xl flex justify-center items-center bg-black text-white"
                      to={"download/" + m.title + "/" + m.movieId}
                    >
                      download
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full pt-7">
            <div className="w-1/2  flex justify-between">
              <button
                onClick={previousPage}
                disabled={isEnable}
                className=" bg-blue-500 rounded-md p-2 hover:bg-blue-300 
                disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                kembali
              </button>

              <button
                onClick={nextPage}
                className="bg-blue-500 rounded-md p-2 hover:bg-blue-300 "
              >
                selanjutnya
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
