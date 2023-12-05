import { useState } from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";
import './SideMenu.css';
import './Header.css';

function Cart(){
  const [isSideMenuVisible, setSideMenuVisibility] = useState(true);

  const toggleSideMenu = () => {
    setSideMenuVisibility(!isSideMenuVisible);
  };
  return(
    <>
      <Header onToggleSideMenu={toggleSideMenu}/>
      <SideMenu className='sideMenu' isVisible={isSideMenuVisible} />
    </>
  )
}

export default Cart;