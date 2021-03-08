import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


const Body = () => {

  const [page , setPage] = useState(1);
  const home = "https://mangamint.kaedenoki.net/api/manga/popular/";
  const [url , setUrl] = useState( home + page);
  const [anime, setAnime] = useState(null);
  const [isEnable, setEnable] = useState(false);

  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)


  const nextPage = () =>{
    console.log('click +');
    setPage(page+1);
    setUrl(home + page);
    setEnable(false);

    console.log("click+++++++++")
  }

  
  const previousPage =()=>{
   console.log('click-')
   if (page === 1 ){
     setEnable(true);
   }else{
     setEnable(false);
     setPage(page-1);
     setUrl(home + page)
   }
    
  } 

  useEffect(() => {
    fetch(url)
      .then(res => {
        if(!res.ok){
          console.log('error')
        }
        return res.json();
      })
      .then(data => {
        setAnime(data.manga_list);
        setLoading(false);
        setError(false);
        console.log('url  =='+url);
      })
      .catch(err =>{
        setError(true);
        setLoading(false);
        console.log(err);
        console.log("urlnya = " + url);
      })
  }, [url]);


    return (
      <div className=" p-32 flex justify-center items-center">
       {isError && <div>ERROR</div>} 
       {isLoading && <div>loading......</div>}
       {anime && <div className="py-3">
          <div className="grid md:grid-cols-4 py-1 px-3 gap-3">
            {anime.map((anime) => (
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
        </div>}
      </div>
    );
}

export default Body;
