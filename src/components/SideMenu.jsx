import { Link } from "react-router-dom";
import styled from 'styled-components';

const SubCategory = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 1ch;
`

function SideMenu({isVisible}){
  const style = {
    width: isVisible ? '200px' : '0',
    paddingLeft: isVisible ? '20px' : '0',
    left: isVisible ? '0' : '-20px',
  };
  return(
    <div className="sideMenu" style={style}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li>
          <Link to="/shop">Shop</Link>
          <SubCategory>
            <Link to="/shop/electronics">Electronics</Link>
            <Link to="/shop/jewelery">Jewelery</Link>
            <Link to="/shop/clothing">Clothing</Link>
          </SubCategory>  
        </li>
      </ul>
    </div>
  )
}

export default SideMenu;