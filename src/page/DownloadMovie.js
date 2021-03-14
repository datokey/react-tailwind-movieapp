import React ,{useEffect, useState} from 'react';
import useDownloadMovie from '../hook/useDownloadMovie';
import {useParams, } from 'react-router-dom';

const DownloadMovie = () => {
    const {title, id} = useParams();
    const {urlDownload} = useDownloadMovie(id)
    const [counter, setCounter] = useState(6);

   useEffect(()=>{
       const timer = counter > 0 && setInterval(()=>setCounter(counter-1),1000);
       return ()=> clearInterval(timer)
    
   },[counter])

   useEffect(()=>{
     if (counter === 0){
       window.open(urlDownload, '_blank')
     }
   })
   
    return (
      <div className="flex justify-center items-center">
        <div className="flex flex-col space-y-3">
          {title} akan segera diunduh, dalam waktu {counter} -detik
          <span>
            Jika halaman tidak segera mendownload tekan tombol download
          </span>
          <a target="_blank" className="bg-blue-300 p-2 rounded-md" rel="noreferrer" href={urlDownload}>
            Download
          </a>
        </div>
      </div>
    );
}

export default DownloadMovie;
