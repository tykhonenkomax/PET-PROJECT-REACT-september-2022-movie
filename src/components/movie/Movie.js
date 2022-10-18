import React from 'react';
import styled from "styled-components";
import ReactStars from "react-stars";

const Movie = ({movie}) => {

  console.log(movie)
  const ratingChanged = (newRating) => {
    console.log(newRating);
  }

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
          <ReactStars
              count={10}
              onChange={ratingChanged}
              size={24}
              activeColor="#DC143C"
              value={movie.vote_average}
          />
          <br/>
          <OriginalCountry>language | {movie.original_language} |</OriginalCountry>
          <br/>

          <FirstAirDateStyle>
            Release date: {movie.release_date}
          </FirstAirDateStyle>
          <br/>
          <ButtonStyle>More...</ButtonStyle>
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
  height: 500px;
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

const OriginalCountry = styled.div`
  color: red;
  font-family: "Andale Mono", serif;
`;
const FirstAirDateStyle = styled.div`
  color: snow;
  font-family: "Andale Mono", serif;
`;

const ButtonStyle = styled.button`
  border: solid 1px #c50303;
  height: 30px;
  width: 150px;
  background: transparent;
  color: red;
  margin-left: 20px;

  &:hover {
    background: transparent;
    color: snow;
  }
`;

export {Movie};

