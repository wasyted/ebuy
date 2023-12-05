import { useState } from "react";
import SideMenu from "./SideMenu.jsx";
import Header from "./Header.jsx";
import styled from 'styled-components';
import "./SideMenu.css";

const HomeContainer = styled.div`
  background: rgb(245,235,221);
  background: linear-gradient(321deg, rgba(245,235,221,1) 35%, rgba(234,227,217,1) 100%); 
  min-height: calc(100dvh);
`

function Home(){
  const [isSideMenuVisible, setSideMenuVisibility] = useState(true);

  const toggleSideMenu = () => {
    setSideMenuVisibility(!isSideMenuVisible);
  };
  return(
    <HomeContainer>
      <Header onToggleSideMenu={toggleSideMenu}/>
      <SideMenu className='sideMenu' isVisible={isSideMenuVisible} />
    </HomeContainer>
  )
}

export default Home;