import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Backup from "../assets/images/backup.png";
export const MovieDetails = () => {
  const params= useParams();
  
  const [movie, setData] = useState([]);
  const url =`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`;
 
  const image=  movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: Backup;

  useEffect(() => {
    async function fetchMovie() {
      const response= await fetch(url);
     
      const json= await response.json();
      console.log(json);
      setData(json);
    }
    fetchMovie();
  }, [url]);

  useEffect(()=>{
    document.title =`${ movie.title }`;
  });
  
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={movie.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:textleft">{movie.title}</h1>
          <p className="my-4">{movie.overview}</p>
            {movie.genres ? (
              <p className="my-7 flex flex-weap gap-2" >
                {
                  movie.genres.map((genre) => (
                    <span className="mr-2 border border-gray-200 rounded p-2" key={genre.id}>{genre.name}</span>
                  ))
                }
              </p>
            )   
            : "" }
           <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer" >{movie.imdb_id}</a>
           </p>          
        </div>
      </section>
    </main>
  )
}
