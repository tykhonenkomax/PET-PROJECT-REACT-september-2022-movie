import React from 'react';

import {Header, MovieDetails} from "../components";
import {Outlet} from "react-router-dom";
import styled from "styled-components";


const MainLayout = () => {


  return (

      <div>
        <Header/>
        <OutletFlexStyle>
          <Outlet />
        </OutletFlexStyle>
      </div>

  );
};

const OutletFlexStyle=styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`;

export {MainLayout};