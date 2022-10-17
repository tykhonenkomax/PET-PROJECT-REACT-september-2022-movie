import React from 'react';
import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {tvActions} from "../../redux/slice/tvSlice";
import {TvShow} from "../tvShow/TvShow";
import styled from "styled-components";

const TvShows = () => {

  const {tv, error, loading} = useSelector(state => state.tv);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tvActions.getAll())
  }, [])

  console.log(tv.results)
  return (

      <GeneralStyle>
        {
          tv.map(tv=><TvShow key={tv.id} tv={tv}/>)
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

export {TvShows};