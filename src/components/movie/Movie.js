import React from 'react';
import styled from "styled-components";

const Movie = ({movie}) => {


  return (
      <div>
        <GeneralCardStyle>
          <TitleStyle>
            {movie.original_title}
          </TitleStyle>

          <br/>
          <div>
            <img style={{width: '200px'}} src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
                 alt="Movie Poster"/>
          </div>
          <OverviewStyle>
           {movie.overview}
          </OverviewStyle>
        </GeneralCardStyle>
      </div>
  );
};


const GeneralCardStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border: solid 1px rgba(247, 33, 25, 0.2);

  height: 550px;
  width: 300px;
  background: black;
  text-align: center;
  padding: 15px;
`;
const TitleStyle = styled.div`
  font-size: 20px;
  color: red;
  font-family: "Andale Mono", serif;
`;
const OverviewStyle = styled.div`
  font-size: 13px;
  color: snow;
  font-family: "Andale Mono", serif;
`;

export {Movie};

