import {useState, useEffect} from 'react';
import axios from 'axios';


const useDownloadMovie = (id) =>{

    const baseUrl = "https://api-filmapik.herokuapp.com/play?id=";
    const [urlDownload, setUrlDownload] = useState(null);


    useEffect(()=>{
        axios.get(baseUrl + id)
        .then((res)=>{
            setUrlDownload(res.data.link)
            console.log(res.data)
        }
        )
    },[id])

    return {urlDownload};
}

export default useDownloadMovie;
