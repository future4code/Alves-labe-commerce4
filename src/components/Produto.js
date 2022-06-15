import React from 'react'
import styled from 'styled-components'

//Importação Imagens//
import Camiseta1 from '../img/feminina-astronauta.png'
import Camiseta2 from '../img/feminina-desenhos.png'
import Camiseta3 from '../img/feminina-galaxia.png'
import Camiseta4 from '../img/feminina-macaco.png'
import Camiseta5 from '../img/masculina-astronautabalao.png'
import Camiseta6 from '../img/masculina-nasa-branca.png'
import Camiseta7 from '../img/masculina-nasa.png'
import Camiseta8 from '../img/masculina-starwars.png'

// Array Produtos

const produtos = [
  {
    key: 1,
    nomeProduto: 'Astronauta',
    valor: 60.0,
    imagemImport: Camiseta1
  },

  {
    key: 2,
    nomeProduto: 'Desenhos',
    valor: 55.0,
    imagemImport: Camiseta2
  },

  {
    key: 3,
    nomeProduto: 'Galaxia',
    valor: 70.0,
    imagemImport: Camiseta3
  },

  {
    key: 4,
    nomeProduto: 'Macaco',
    valor: 60.0,
    imagemImport: Camiseta4
  },

  {
    key: 5,
    nomeProduto: 'Astronauta',
    valor: 75.0,
    imagemImport: Camiseta5
  },
  {
    key: 6,
    nomeProduto: 'Nasa-Branca',
    valor: 85.0,
    imagemImport: Camiseta6
  },
  {
    key: 7,
    nomeProduto: 'Nasa-Preta',
    valor: 85.0,
    imagemImport: Camiseta7
  },
  {
    key: 8,
    nomeProduto: 'Starwars',
    valor: 90,
    imagemImport: Camiseta8
  }
]

class Produtos extends React.Component {
  render() {
    return <div className="Container">Cards Aqui</div>
  }
}
export default Produtos
