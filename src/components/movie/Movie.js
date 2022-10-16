import React from 'react';

const Movie = ({movie}) => {


  return (
<div>
      <div className='flexStyle'>
        <div className='cardStyle'>
        NAME:{movie.original_title} <br/>
        ABAUT:{movie.overview} <br/>
        <img className='posterStyle' src={'https://image.tmdb.org/t/p/original/'+movie.poster_path}  alt="Movie Poster"/>
      </div>
      </div>
</div>
  );
};


export {Movie};

