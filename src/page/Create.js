import { useState } from "react";
import {useHistory} from 'react-router-dom';


const Create = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [isLoading, setLoading] = useState(false);
  const History = useHistory();


  const handleSubmit  = (e) => {
    e.preventDefault();
    const data = {title, image, description, rating};
    setLoading(true);

     fetch("http://localhost:8080/movie",{
     method: 'POST',
     headers:{"Content-Type": "application/json"},
     body:JSON.stringify(data)
   }).then(()=> {
     setLoading(false);
     History.push('/');
   });
  }

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="space-y-3 p-3 bg-gray-300 shadow-2xl md:w-96 rounded-xl">
          <h1 className="font-extrabold text-4xl w-full ">Form Anime</h1>
          <div className="">
            <h1>Nama Anime</h1>
            <input
              type="text"
              placeholder="Nama Anime"
              className="outline-none rounded p-1 w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <h1>Rating Anime</h1>
            <input
              type="number"
              placeholder="Rating"
              className="outline-none rounded p-1 w-full"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div>
            <h1>Deskripsi</h1>
            <textarea
              placeholder="deskripsi"
              className="outline-none rounded p-1 w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <h1>Url Foto</h1>
            <input
              type="text"
              placeholder="URL foto anime"
              className="outline-none rounded p-1 w-full"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <button className="bg-blue-400 rounded p-1 outline-none w-full">
              {isLoading && <div>Menambahkan Data......</div>}
              {!isLoading && <div>Submit</div>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
