import React from 'react'
import './App.css'
import Produtos from './components/Produto.js'
import styled from 'styled-components'

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Header><p>Nome da Loja</p></Header>
        <DivFilters>Aqui os filtros</DivFilters>
        <DivCards>
          <Produtos />
          Cards
        </DivCards>
        <DivCart>Carrinho</DivCart>
        <Footer>Aqui o Footer</Footer>
      </MainContainer>
    )
  }
}
export default App

const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 10%;
  text-align: center;
  border-bottom: 1px solid black;
  background-color: #092047;
  color: white;
`
const DivFilters = styled.div`
  display: flex;
  background-color: yellow;
  left: 0;
  width: 10%;
  border-right: 1px solid black;
`
const DivCards = styled.div`
display: flex;
top:20%;
left: 20%;
text-align: center;
`
const DivCart = styled.div`
display: flex;
background-color: red;
height: 100%;
width: 10%;
align-items: center;
right: 0;
border-left: 1px solid black;
`
const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;
  text-align: center;
  border-top: 1px solid black;
  background-color: #092047;
  color: white;
`