import React, {useEffect, useState} from 'react';
import {movieServices} from "../../services";
import {Movie} from "../movie/Movie";

const Movies = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieServices.getAll().then(({data}) => setMovies(data.results))
  }, [])

  console.log(movies)

  return (
      <div>
        {
          movies.map(movie => <Movie key={movie.id} movie={movie}/>)
        }
      </div>

  );
};


export {Movies};