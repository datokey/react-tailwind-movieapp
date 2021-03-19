import { useState, useEffect } from "react";

const useFetchListAnime = (pathName, paramater, page) => {
  const endPoint = "https://api-filmapik.herokuapp.com/";
  
//   const [page] = useState(1);
  const [dataMovie, setDataMovie] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [isEnable, setEnable] = useState(false);
  const maxResult = "&maxResult=20"
 //   category berisi popular dan all anime
  useEffect(() => {
        setLoading(true);
        console.log(endPoint + pathName + paramater + page + maxResult);
        fetch(endPoint + pathName + paramater + page + maxResult)
            .then(res => {
                if (!res.ok) {
                    throw Error('Tidak Bisa Memuat Data');
                }
                return res.json();
            })
            .then(data => {
                setDataMovie(data.result);
                console.log(data.result);
                setLoading(false);
                setError(null);
                if (page === 1){
                    setEnable(true);
                }else{
                    setEnable(false);
                };
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
                console.log(err.message)
            });
    },[ page, pathName, paramater]);

    return {dataMovie, isLoading, isError, isEnable}
}

export default useFetchListAnime;