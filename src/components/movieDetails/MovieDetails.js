import React from 'react';
import {useLocation} from "react-router-dom";
import styled from "styled-components";

const MovieDetails = () => {


  const {state} = useLocation();


  return (

      <GeneralBoxStyle>
        <CardStyle>
          <div><img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} alt="movie img"/></div>
          <br/>
          <TitleStyle>{state.title}</TitleStyle>

          <ReleaseDateStyle>Release Date: {state.release_date}</ReleaseDateStyle>
          <div>Genre:</div>
          <LanguageStyle>| {state.original_language.toUpperCase()} |</LanguageStyle>
          <br/>
          <br/>
          <OverviewStyle>Overview: {state.overview}</OverviewStyle>
        </CardStyle>
      </GeneralBoxStyle>


  );
};

const GeneralBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 1px red;
  border-radius: 15px;
  height: 1200px;
  width: 80%;
`;

const CardStyle = styled.div`
  text-align: center;
  padding: 20px;
  flex-wrap: wrap;
`;

const TitleStyle = styled.div`
  color: red;
  font-size: 50px;
  font-family: "Andale Mono", serif;
`;

const ReleaseDateStyle = styled.div`
  color: snow;
  font-size: 16px;
  font-family: "Andale Mono", serif;
`;

const LanguageStyle = styled.div`
  color: red;
  font-size: 25px;
  font-family: "Andale Mono", serif;
`;

const OverviewStyle = styled.div`
  color: snow;
  font-family: "Andale Mono", serif;
`;

export {MovieDetails};