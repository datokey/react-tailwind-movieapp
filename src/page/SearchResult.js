import React, { useContext, useEffect } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { useParams, Link } from "react-router-dom";

const SearchResult = () => {
  const {
    SearchGenre,
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
      SearchGenre(param);
    }
  }, [search, param, SearchGenre , searching ]);

  return (
    <div className="flex justify-center items-center flex-col">
      {!isDataAvail && isLoading && <div>Mencari {param}</div>}
      {!isDataAvail && !isLoading && (
        <div
          className="animate-bounce
         bg-red-500 text-white p-3 rounded text-2xl"
        >
          Film {param} Tidak Ditemukan
        </div>
      )}
      {!isLoading && isDataAvail && movie && (
        <div className="pt-10 md:p-28 p-10">
          <h1 className="text-2xl font-bold p-5">Hasil Pencarian {param}</h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
            {movie.map((m) => (
              <div className="rounded-lg shadow-2xl bg-white overflow-hidden">
                <div className="flex flex-col">
                  <div>
                    <img
                      className="w-full h-72 max-h-72 sm:h-42"
                      src={m.thumbnailPotrait}
                      alt={m.title}
                    />
                  </div>
                  <div className="flex justify-end p-3 text-right font-bold text-lg h-20">
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
          <div className="flex justify-center space-x-6 pt-14">
            <button
              className="bg-black disabled:opacity-50 text-white p-2 rounded "
              disabled={isDisable}
              onClick={prevPage}
            >
              Kembali
            </button>
            <p> {page}</p>
            <button
              onClick={nextPage}
              className="bg-black text-white p-2 rounded "
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
