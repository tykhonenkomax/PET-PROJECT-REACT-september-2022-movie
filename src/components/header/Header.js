import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {SearchWindow} from "../searchWindow/SearchWindow";
import css from './header.module.css'

const setActive = ({isActive}) => isActive ? 'active-link' : ''

const Header = () => {


  const navigate = useNavigate();
  return (

      <GeneralBoxStyle>

        <LogoStyle>FILM<LogoStyleMax>MAX</LogoStyleMax></LogoStyle>

        <SearchMenuStyle>
          <NavLinkContainerStyle>
            <NavLink className={css.a} style={({isActive}) => ({color: isActive ? 'red' : 'snow'})} to={'/home'}>Home</NavLink>
            <NavLink className={css.a} style={({isActive}) => ({color: isActive ? 'red' : 'snow'})} to={'/movies'}>Movies</NavLink>
            <NavLink className={css.a} style={({isActive}) => ({color: isActive ? 'red' : 'snow'})} to={'/tv'}>Tv Shows</NavLink>
          </NavLinkContainerStyle>

          <div>
            <SearchWindow/>
          </div>

          <div>
            <ButtonStyle onClick={() => navigate(-1)}>Prev</ButtonStyle>
            <ButtonStyle onClick={() => navigate(1)}>Next</ButtonStyle>
          </div>

        </SearchMenuStyle>

      </GeneralBoxStyle>
  )
      ;
};
const GeneralBoxStyle = styled.div`
  background: black;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SearchMenuStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-width: 900px;
`;

const LogoStyle = styled.div`
  font-size: 50px;
  color: snow;
`;

const LogoStyleMax = styled.span`
  color: #c50303;
  font-size: 70px;
  font-weight: bold;
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

const NavLinkContainerStyle = styled.div`
  display: flex;
`;

export {Header};