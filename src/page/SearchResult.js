import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading"


const SearchResult = () => {
  const {
    Genre,
    searching,
    movie,
    isLoading,
    isDataAvail,
    nextPage,
    prevPage,
    isDisable,
    page
  } = useContext(SearchContext);
  
  const { search, param } = useParams();

  useEffect(() => {
    if (search === "title") {
      searching(param);
    } else {
     Genre(param);
    }
    // eslint-disable-next-line 
  }, [search, param]);
  
  return (
    <div className="flex flex-col items-center justify-center">
      {isLoading &&  (
        <div>
          <Loading />
        </div>
      )}
       {!isDataAvail && (
            <div className="p-3 text-2xl text-white bg-red-500 rounded animate-bounce">
              Film {param} Tidak Ditemukan
            </div>
          )}
      {!isLoading && movie && isDataAvail && (
        <div className="p-10 pt-10 md:p-28">
          <h1 className="p-5 text-2xl font-bold">Hasil Pencarian {param}</h1>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {movie.map((m) => (
              <div className="overflow-hidden bg-white rounded-lg shadow-2xl" key={m.moveId}>
                <div className="flex flex-col">
                  <div>
                    <img
                      className="w-full h-72 max-h-72 sm:h-42"
                      src={m.thumbnailPotrait}
                      alt={m.title}
                    />
                  </div>
                  <div className="flex justify-end h-20 p-3 text-lg font-bold text-right">
                    {m.title}
                  </div>
                  <div className="flex justify-between mt-4">
                    <a
                      className="flex items-center justify-center w-1/2 py-3 text-xl border-t-2 border-r-2 border-black"
                      href={m.detail.trailer}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Trailer
                    </a>
                    <Link
                      className="flex items-center justify-center w-1/2 py-3 text-xl text-white bg-black"
                      to={"download/" + m.title + "/" + m.movieId}
                    >
                      download
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-6 pt-14">
            <button
              className="p-2 text-white bg-black rounded disabled:opacity-50 "
              disabled={isDisable}
              onClick={prevPage}
            >
              Kembali
            </button>
            <p> {page}</p>
            <button
              onClick={nextPage}
              className="p-2 text-white bg-black rounded "
            >
              Selanjutnya
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
