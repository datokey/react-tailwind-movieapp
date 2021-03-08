// import {useParams } from "ract-router-dom";
import {useParams, useHistory} from "react-router-dom";
import useFetch from '../hook/useFetch';


const Detail = () => {

    const History = useHistory();
    const {id} = useParams();
    const { data, error, isLoading } = 
    useFetch('http://localhost:8080/movie/'+id);

    const handleClick = () =>{
      fetch('http://localhost:8080/movie/' + data.id,{
        method: 'DELETE'
      }).then(()=>{
        History.push('/');
      });
    }


    return (
      <div className="flex justify-center items-center md:p-24 p-10">
        <div className="flex flex-col p-5 rounded-lg shadow-2xl">
          {/* gambar */}
          {isLoading && <div>Loading.......</div>}
          {error && <div>error</div>}
          {data && (
            <div>
              <div>
                <div className="flex justify-center items-center mb-5">
                  <img
                    src={data.image}
                    className="bg-gray-200 p-1 rounded-xl shadow-2xl max-h-80"
                    alt=""
                  />
                </div>
              </div>
              {/* Judul */}
              <div>
                <p className="text-2xl font-bold">{data.title}</p>
              </div>
              {/* link */}
              <div>
                <div className="p-3">
                  <p className="font-light text-xs">{data.relase_date}</p>
                </div>
              </div>
              {/* isi page */}

              <div>
                <div className="space-y-4">
                  <p>{data.description}</p>
                </div>
              </div>

              <button onClick={handleClick} button className="bg-red-400 rounded p-1 outline-none ">Delete</button>
            </div>
          )}
        </div>
      </div>
    );
}

export default Detail;