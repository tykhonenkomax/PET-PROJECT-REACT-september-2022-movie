import React from 'react';
import styled from "styled-components";

const TvShow = ({tv}) => {


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
            <br/>
            <OverviewStyle>
              {tv.overview && tv.overview ? tv.overview : '\n' +
                  'If you see this description " AT THE STAGE OF IMPROVEMENT" - this means that the description of the film is being corrected by the author'}
            </OverviewStyle>
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

  height: 600px;
  width: 300px;
  background: black;
  text-align: center;
  padding: 15px;
`;
const OverviewStyle = styled.div`
  margin-top: 20px;
  font-size: 13px;
  color: snow;
  font-family: "Andale Mono", serif;
`;


export {TvShow};