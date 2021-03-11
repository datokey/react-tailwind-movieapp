import { useState, useEffect } from "react";

const useFetchListAnime = (category) => {
  const endPoint = "https://mangamint.kaedenoki.net/api/manga/";
  
  const [page] = useState(1);
  const [dataAnime, setDataAnime] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [isEnable, setEnable] = useState(true);
 //   category berisi popular dan all anime
  useEffect(() => {
        fetch(endPoint + category + page)
            .then(res => {
                if (!res.ok) {
                    throw Error('Tidak Bisa Memuat Data');
                }
                return res.json();
            })
            .then(data => {
                setDataAnime(data.manga_list);
                console.log(data);
                setLoading(false);
                setError(null);
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
                console.log(err.message)
            });
    },[category, page]);

    return {dataAnime, isLoading, isError}
}

export default useFetchListAnime;