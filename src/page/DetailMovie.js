import {useParams} from 'react-router-dom';

const DetailAnime = () => {
    const {id} = useParams();
    
    return (
      <div className="flex flex-col justify-center items-center">
         {id}
      </div>
    );
}

export default DetailAnime;
