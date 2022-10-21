import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

import {useSearchParams} from "react-router-dom";

import {Movie} from "../movie/Movie";

import styled from "styled-components";
import {SearchBar} from "../searchBar/SearchBar";


const Movies = () => {

  const {movies, error, loading} = useSelector(state => state.movies);

  const dispatch = useDispatch();

  const [query, setQuery] = useSearchParams({page: '1'});
  const page = query.get('page');

  useEffect(() => {
    dispatch(moviesActions.getAll(page))
  }, [page, dispatch])


  const prevPage = () => {
    const prev = +page - 1;
    if (prev >= 1) {
      setQuery({page: `${prev}`})
    }
  }

  const nextPage = () => {
    const next = +page + 1;
    if (next <= 500) {
      setQuery({page: `${next}`})
    }
  }


  return (
      <div>

        <ButtonBox>
          <ButtonStyle onClick={prevPage}>Prev</ButtonStyle>
          <ButtonStyle onClick={nextPage}>Next</ButtonStyle>
        </ButtonBox>
        <SearchBarStyle>
        <SearchBar/>
        </SearchBarStyle>
        <br/>
        <GeneralStyle>

          {loading && <h1>Loading.......................!</h1>}
          {error && JSON.stringify(error)}
          {
            movies.map(movie => <Movie key={movie.id} movie={movie}/>)
          }
        </GeneralStyle>
      </div>
  );
};

const GeneralStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: black;
  justify-content: center;
`;


const ButtonStyle = styled.button`
  border: solid 1px #c50303;
  height: 50px;
  width: 150px;
  background: transparent;
  color: snow;
  margin-left: 20px;

  &:hover {
    background: transparent;
    color: red;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SearchBarStyle = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`;

export {Movies};