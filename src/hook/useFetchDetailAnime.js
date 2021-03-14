import { useState, useEffect } from 'react';
const useFetchDetailAnime = (detail) =>{

  const [dataMovie, setDataMovie] = useState(null);

  useEffect(()=>{
    setDataMovie(detail);
  })
    return dataMovie
}

export default useFetchDetailAnime;