import React from 'react';
import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {tvActions} from "../../redux/slice/tvSlice";
import {TvShow} from "../tvShow/TvShow";
import styled from "styled-components";
import {useSearchParams} from "react-router-dom";
import {SearchBar} from "../searchBar/SearchBar";

const TvShows = () => {


  const {tv, error, loading} = useSelector(state => state.tv);

  const dispatch = useDispatch();

  const [query, setQuery] = useSearchParams({page: '1'});
  const pageTv = query.get('page');

  useEffect(() => {
    dispatch(tvActions.getAll(pageTv))
  }, [pageTv, dispatch])

  const prevPage = () => {
    const prev = +pageTv - 1;
    if (prev >= 1) {
      setQuery({page: `${prev}`})
    }
  }

  const nextPage = () => {
    const next = +pageTv + 1;
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
        <SearchBar/>
        <GeneralStyle>
          {loading && <h1>Loading.......................!</h1>}

          {error && JSON.stringify(error)}
          {
            tv.map(tv => <TvShow key={tv.id} tv={tv}/>)
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
  font-family: "Andale Mono", serif;

  &:hover {

    color: red;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export {TvShows};