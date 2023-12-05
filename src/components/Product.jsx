import styled from 'styled-components'

const ProductTitle = styled.p`
  color: #121212;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ProductImage = styled.img`
  max-width: 100%;
  height: 200px;
  transition: 200ms ease-in-out;
`

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f7;
  gap: 10px;
  padding: 20px;
  height: 350px;
  max-width: 300px;
  transition: 200ms ease-in-out;
  &:hover{
    scale: 102%;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.1);
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.1);
  }
`

const ProductPrice = styled.p`
  align-self: end;
  justify-self: end;
`

const Footing = styled.div`
  display: grid;
  align-items: end;
  grid-template-columns: 1fr 1fr;
`


function Product(props){
  return(
    <ProductContainer>
      <ProductImage src={props.image} alt="" />
      <Footing>
        <ProductTitle>{props.title}</ProductTitle>
        <ProductPrice>${props.price}</ProductPrice>
      </Footing>
    </ProductContainer>
  )
}

export default Product;