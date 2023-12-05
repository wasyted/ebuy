import { useState , useEffect } from "react";
import styled from 'styled-components';
import SideMenu from "./SideMenu.jsx";
import Header from "./Header.jsx";
import Product from "./Product.jsx";
import "./SideMenu.css";


const ShopContainer = styled.div`
  min-height: 100dvh;
  background: rgb(206,220,221);
  background: linear-gradient(192deg, rgba(206,220,221,1) 35%, rgba(206,234,236,1) 100%);
`
const ProductsContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 60px;
  gap: 60px;
  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

function Shop(){
  const [productList, setProductList] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProductList(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPost();
  }, []);

  const [isSideMenuVisible, setSideMenuVisibility] = useState(true);

  const toggleSideMenu = () => {
    setSideMenuVisibility(!isSideMenuVisible);
  };
  return(
    <ShopContainer>
      <Header onToggleSideMenu={toggleSideMenu}/>
        <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
          <SideMenu className='sideMenu' isVisible={isSideMenuVisible} />
          <ProductsContainer>
            {productList && productList.map((product) => (
              <Product key={product.key} image={product.image} title={product.title} price={product.price}/>
            ))}
          </ProductsContainer>
        </div>
    </ShopContainer>
  )
}

export default Shop;