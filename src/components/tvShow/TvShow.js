import React from 'react';

import styled from "styled-components";
import ReactStars from "react-stars";
import {NavLink} from "react-router-dom";

const TvShow = ({tv}) => {

  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
      <div>
        <div>
          <GeneralCardStyle>
            <br/>
            <div>
              <img style={{width: '200px'}} src={'https://image.tmdb.org/t/p/original/' + tv.poster_path}
                   alt="Movie Poster"/>
            </div>
            <br/>

            <ReactStars
                count={10}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                value={tv.vote_average}
            />
            <br/>

            <FirstAirDateStyle>
              Premiere date: {tv.first_air_date}
            </FirstAirDateStyle>
            <br/>
            <OriginalCountry>Country: | {tv.origin_country} |</OriginalCountry>
            {/*<OverviewStyle>*/}
            {/*  {tv.overview && tv.overview ? tv.overview : '\n' +*/}
            {/*      'If you see this description " AT THE STAGE OF IMPROVEMENT" - this means that the description of the film is being corrected by the author'}*/}
            {/*</OverviewStyle>*/}
            <br/>

            <NavLink to={tv.id.toString()} state={tv}><ButtonStyle>More...</ButtonStyle></NavLink>

          </GeneralCardStyle>

        </div>

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

// const OverviewStyle = styled.div`
//   margin-top: 20px;
//   font-size: 13px;
//   color: snow;
//   font-family: "Andale Mono", serif;
// `;

const FirstAirDateStyle = styled.div`
  color: snow;
  font-family: "Andale Mono", serif;
`;

const OriginalCountry = styled.div`
  color: red;
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


export {TvShow};