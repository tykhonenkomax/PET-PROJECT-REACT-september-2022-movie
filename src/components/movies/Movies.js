import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {Movie} from "../movie/Movie";
import styled from "styled-components";


const Movies = () => {

  const {movies, error, loading} = useSelector(state => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesActions.getAll())
  }, [])

  console.log(movies.results)
  return (
      <GeneralStyle>
        {loading && <h1>Loading.......................!</h1>}

        {error && JSON.stringify(error)}
        {
          movies.map(movie => <Movie key={movie.id} movie={movie}/>)
        }
      </GeneralStyle>

  );
};

const GeneralStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: black;
  justify-content: center;
`;

export {Movies};