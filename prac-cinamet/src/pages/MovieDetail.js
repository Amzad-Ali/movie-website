import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
export default function MovieDetail() {
  const param = useParams();
  const [movie,setMovie] = useState({});
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : " " ;
 
  useEffect(() => {
    async function fetchMovieData(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/${param.id}?api_key=735ae5b6bde3bfe410c670d344314405`)
      const json = await response.json();
      console.log(json);
      setMovie(json);
    }
    fetchMovieData();
  },)

  return (
    <main>
      <section className='flex flex-wrap py-5 justify-around'>
          <div  className=' max-w-sm'>
                <img src={image} alt={movie.original_title} />
          </div>
          <div className=' max-w-2xl dark:text-white'>
                <h1 className='font-bold text-4xl text-center my-4'>{movie.title}</h1>
                <p>{movie.overview}</p>
                {movie.genres ? ( <p className='py-4'>
                  {movie.genres.map((genre) => (
                    // <span className=' mr-4 px-3 bg-cyan-400 ' key={genre.id}>{genre.name}</span>
                       <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" key={genre.id}>{genre.name}</button>
                  ))}
                </p>) : " "}
                <div className="flex items-center py-3 text-lg">
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <p className="ml-2 text-gray-900 dark:text-white">{movie.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span className="text-gray-900 dark:text-white">{movie.vote_count} reviews</span>
                </div>
                <p className=' py-3'>
                  <span className=' font-bold text-lg'>Runtime: </span>
                  <span>{movie.runtime}</span>
                </p>
                <p className='py-3'>
                  <span className=' font-bold text-lg'>Budget: </span>
                  <span>{movie.budget}</span>
                </p>
                <p className='py-3'>
                  <span className=' font-bold text-lg'>Revenue: </span>
                  <span>{movie.runtime}</span>
                </p>
                <p className='py-3'>
                  <span className=' font-bold text-lg'>Release Date: </span>
                  <span>{movie.runtime}</span>
                </p>
                <p className='py-3'>
                  <span className=' font-bold text-lg'>IMDB code:  </span>
                  <span>{movie.imdb_id}</span>
                </p>
          </div>
      </section>
    </main>
  )
}
