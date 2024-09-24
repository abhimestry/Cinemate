import {Routes, Route} from "react-router-dom";  
import { MovieList } from "../pages/MovieList";
import {MovieDetails} from "../pages/MovieDetails";
import { PageNotFound } from "../pages/PageNotFound";
import { Search } from "../pages/Search";
export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
    <Routes>
      <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" /> } />
      <Route path="movie/:id" element={<MovieDetails /> } />
      <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" /> } />
      <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" /> } />
      <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" /> } />
      <Route path="movies/search" element={ <Search apiPath="search/movie" /> } /> 
      <Route path="*" element={<PageNotFound title="Page"  /> } /> 
    </Routes>
     
    
    </div>
     
  )
}
