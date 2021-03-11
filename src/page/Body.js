import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchListAnime from '../hook/useFetchListAnime'

const Body = () => {
  // const [page, setPage] = useState(1);
  // const home ='httrps://mangamint.kaedenoki.net/api/manga/popular/';
  // // const [url] = useState(home + page);
  // const [anime, setAnime] = useState(null);
  // const [isEnable, setEnable] = useState(true);

  // const [isLoading, setLoading] = useState(true);
  // const [isError, setError] = useState(false);

  // const nextPage = () => {
  //   setLoading(true);
  //   setPage(page + 1);
  // };

  // const previousPage = () => {
  //   setLoading(true);
  //   setPage(page-1);
  // };

  // useEffect(() => {
  //   fetch(home + page)
  //     .then((res) => {
  //       if (!res.ok) {
  //         console.log("error");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setAnime(data.manga_list);
  //       setLoading(false);
  //       setError(false);
  //       if (page === 1) {
  //         setEnable(true);
  //       }else{
  //         setEnable(false);
  //       }
  //       console.log(
  //         home + page
  //       );
  //     })
  //     .catch((err) => {
  //       setError(true);
  //       setLoading(false);
  //       console.log(err);
  //       console.log("urlnya = " + page);
  //     });
  // }, [page]);

  const [page] = useState(1);
  const category = "page/";
  const {dataAnime, isError, isEnable} = useFetchListAnime(category);
   
  // const [isLoading] = useState(false);

  const nextPage = () => {
    // setLoading(true);
    // setPage(page + 1);
  };

  const previousPage = () => {
    // setLoading(true);
    // setPage(page - 1);
  };

  useEffect(()=>{
    console.log('hasil fetch = '+dataAnime)
  })

  return (
    <div className="md:p-32 sm:p-16 p-9 flex justify-center items-center">
      {isError && <div>ERROR</div>}
      {/* {isLoading && <div>loading......</div>} */}
      { dataAnime && (
        <div className="py-9">
          <div className="grid md:grid-cols-4 grid-cols-5 gap-3">
            {dataAnime.map((anime) => (
              <div
                className="p-2 border-2 bg-white rounded-lg shadow-md hover:shadow-2xl h-full"
                key={anime.thumb}
              >
                {/* <div className="py-24 px-20 text-center border border-red-700">Foto</div> */}
                <Link to={"#"}>
                  <img
                    src={anime.thumb}
                    alt={anime.title}
                    className="rounded w-full h-auto sm:h-42"
                  />
                  <div className="text-right font-bold">{anime.title}</div>
                  <div className="text-right font-extralight text-xs">
                    {anime.upload_on}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full pt-7">
            <div className="w-1/2  flex justify-between">
              <button
                onClick={previousPage}
                disabled={isEnable}
                className=" bg-blue-500 rounded-md p-2 hover:bg-blue-300 
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
