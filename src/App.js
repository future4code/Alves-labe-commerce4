import React from 'react'
import styled from 'styled-components'
import Order from './components/Order'
import Products from './components/Products'
import Cart from './components/Cart'
import Filters from './components/Filters'
import Feminina1 from './img/feminina1.png'
import Feminina2 from './img/feminina2.png'
import Feminina3 from './img/feminina3.png'
import Masculina1 from './img/masculina1.png'
import Masculina2 from './img/masculina2.png'
import Masculina3 from './img/masculina3.png'

class App extends React.Component {
  state = {
    productsList:
        [{
            name: 'Astronauta USA',
            id: 1,
            image: Feminina1,
            value: 20
        },
        {
            name: 'Espacial black',
            id: 2,
            image: Feminina2,
            value: 130
        },
        {
            name: 'Galaxy supernova',
            id: 3,
            image: Feminina3,
            value: 80
        },
        {
            name: 'Astronauta baloon',
            id: 4,
            image: Masculina1,
            value: 50
        },
        {
            name: 'NASA black',
            id: 5,
            image: Masculina2,
            value: 200
        },
        {
          name: 'NASA white',
          id: 6,
          image: Masculina3,
          value: 60
      }
      ],

      filterMinValue: '',
      filterMaxValue: '',
      filterNameValue: '',
      filterOrderValue: 1,
      cartProductsList: []

    }

    /* FUNÇÕES PARA ATUALIZAR OS INPUTS DOS FILTROS */
    onChangeFilterMinValue = (event) => {
      this.setState({filterMinValue: event.target.value})
    }

    onChangeFilterMaxValue = (event) => {
      this.setState({filterMaxValue: event.target.value})
    }

    onChangeFilterNameValue = (event) => {
      this.setState({filterNameValue: event.target.value})
    }

    onChangeFilterOrderValue = (event) => {
      this.setState({fiterOrderValue: event.target.value})
    }

    newProductsList = [...this.state.productsList]
  
    render() {

      /* ------------- FILTRO FEITO ------------*/
      const mapProducts = this.newProductsList
      .filter((product) => {
        return this.state.filterMinValue == "" || product.value >= this.state.filterMinValue
      })
      .filter((product) => {
        return this.state.filterMaxValue == "" || product.value <= this.state.filterMaxValue
      })
      .filter((product) => {
        return product.name.toLowerCase().includes(this.state.filterNameValue.toLowerCase()) 
      })
      .sort((currentProduct,nextProduct) => {
        return this.state.filterOrderValue *(currentProduct.value - nextProduct.value)
      })
      .map((product)=>{
        return <Products 
        key={product.id}
        name={product.name}
        image={product.image}
        value={product.value}
        />     
      })

      
     /* ------------- FILTRO FEITO ------------*/

      return (
        <BodyStyle>
          <HeaderStyle><h1>Virgo Space</h1></HeaderStyle>
          <SubContainerStyle>
          <DivFiltersStyle>            
              <Filters
              changeMin={this.onChangeFilterMinValue}
              filterMin={this.state.filterMinValue}
              changeMax={this.onChangeFilterMaxValue}
              filterMax={this.state.filterMaxValue}
              changeName={this.onChangeFilterNameValue}
              filterName={this.state.filterNameValue}
              />              
          </DivFiltersStyle>
          <MainStyle>
            <Order 
            qtt={mapProducts.length}
            changeOrder={this.onChangeFilterOrderValue}
            filterOrder={this.state.filterOrderValue}
            />
            {mapProducts}                  
          </MainStyle>
          <DivUserCartStyle>
            <h3>Carrinho:</h3>
            
            </DivUserCartStyle>
          </SubContainerStyle>
          <FooterStyle><p>🚀</p></FooterStyle>
        </BodyStyle>
      )
  }
}
export default App

const BodyStyle = styled.body`
display: flex;
width: 100vw;
height: 100vh;
flex-direction: column;
color: white;
`
const HeaderStyle = styled.header`
display: flex;
width: 100%;
height: 10%;
justify-content: center;
align-items: center;
background-color: black;
`

const SubContainerStyle = styled.div`
display: flex;
width: 100%;
height: 80%;
`

const DivFiltersStyle = styled.section`
display: flex;
width: 20%;
height: 100%;
background-color: purple;
outline: 2px solid purple;
outline-offset: -2px;
justify-items: auto;
input {
  padding: 3px;
  margin: 3px;
}
`

const MainStyle = styled.main`
display: flex;
flex-wrap: wrap;
width: 70%;
height: 100%;
background-color: purple;
outline: 2px solid purple;
outline-offset: -2px;
flex-direction: row;
justify-content: space-evenly;
`

const DivUserCartStyle = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 15%;
height: 100%;
background-color: purple;
outline: 2px solid purple;
outline-offset: -2px;

`

const FooterStyle = styled.footer`
display: flex;
width: 100%;
height: 10%;
justify-content: center;
align-items: center;
background-color: black;
font-size: 2rem;
`