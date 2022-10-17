import React from 'react';
import css from './SearchBar.css'
import styled from "styled-components";

const SearchBar = () => {


  return (

      <div>
        <form>
          <div>
            <GeneralBox>
              <label>
              <InputStyle type='search'
                          placeholder='Search'
                          name='Search'
                          rules='required'
                          value='Search your favorite video'
              >
                <ButtonStyle>Search</ButtonStyle>

              </InputStyle>
              </label>

            </GeneralBox>
          </div>
        </form>
      </div>

  );
};

const GeneralBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const ButtonStyle = styled.div`
  height: 50px;
  width: 100px;
  background: transparent;
  margin-left: 20px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputStyle = styled.div`
  height: 30px;
  background-color: snow;
  width: 500px;
  border-radius: 15px;
  display: flex;
  justify-content: end;
  align-items: center;
  font-family: "Andale Mono", serif;
`;

export {SearchBar};