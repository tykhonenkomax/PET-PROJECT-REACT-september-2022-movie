import React, {useState} from 'react';

import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";
import styled from "styled-components";


const SearchBar = () => {

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const searchMovies = (e) => {
    e.preventDefault()

    if (search) {
      dispatch(moviesActions.searchMovie(search))
    } else dispatch(moviesActions.getAll())
  }

  const clear = (e) => {
    e.preventDefault()

    if (search) {
      dispatch(moviesActions.searchMovie(search))
    } else
      setSearch('');
  }

  return (
      <form onChange={searchMovies}>
        <InputStyle type="text"
                    placeholder={"Search..."}
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
        />
        <ButtonStyle onClick={clear}>Search</ButtonStyle>
      </form>
  );
};

const InputStyle = styled.input`
  height: 30px;
  width: 400px;
  border-radius: 15px;
`;

const ButtonStyle = styled.button`
  border: solid 1px transparent;
  height: 50px;
  width: 150px;
  background: transparent;
  color: red;

  &:hover {
    background: transparent;
    color: red;
  }
`;

const Style = styled`
display: flex;
  justify-content: center;
`;
export {SearchBar};