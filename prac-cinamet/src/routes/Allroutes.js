import React from 'react'
import {Routes , Route} from 'react-router-dom';
import MovieList from '../pages/MovieList';
import MovieDetail from '../pages/MovieDetail';
import PageNotFound from '../pages/PageNotFound';
import Search from '../pages/Search';
export default function Allroutes() {
  return (
   <div className='dark:bg-slate-800'>
     <Routes>
        <Route path='/' element={<MovieList apiPath="movie/now_playing"/>}/>
        <Route path='movie/top' element={<MovieList apiPath="movie/top_rated"/>}/>
        <Route path='movie/upcoming' element={<MovieList apiPath="movie/upcoming"/>}/>
        <Route path='movie/popular' element={<MovieList apiPath="movie/popular"/>}/>
        <Route path='Movie/:id' element={<MovieDetail/>}/>
        <Route path='search' element={<Search apiPath="search/movie"/>}/>
        <Route path='*' element={<PageNotFound/>}/>
     </Routes>
    </div>
  )
}
