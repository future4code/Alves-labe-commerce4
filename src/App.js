import React from 'react'
import './App.css'
import Produtos from './components/Produto.js'

class App extends React.Component {
  render() {
    return (
      <section className="Container">
        <header className="Header">Nome da Loja</header>
        <div className="Filtros">Aqui os filtros</div>
        <div className="Cards">
          <Produtos />
          Cards
        </div>
        <div className="Carrinho">Carrinho</div>
        <footer className="Footer">Aqui o Footer</footer>
      </section>
    )
  }
}
export default App
