import styled from 'styled-components';
import cartIcon from '../assets/icons8-cart-96.png'
import menuIcon from '../assets/icons8-open-menu-96.png'
import './Header.css';
const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  color: #121212;
`;
const CartButton = styled.button`
  background-color: transparent;  
  background-image: url(${cartIcon});
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  padding: 3px;
  width: 35px;
  height: 25px;
`;
const MenuButton = styled.button`
  background-color: transparent;
  background-image: url(${menuIcon});
  background-size: cover;
  border: none;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
`;
function Header({ onToggleSideMenu }){
  return(
    <div className="header">
        <MenuButton onClick={onToggleSideMenu} className="menuButton"></MenuButton>
        <Title>eBuy</Title>
        <CartButton></CartButton>
    </div>
  )
}
export default Header;