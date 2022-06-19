import React, { Component } from 'react'
import styled from 'styled-components'

export default class Products extends Component {
    render() {
        return (
            <ProductCardStyle>
                <h3>{this.props.name}</h3>
                <img src={this.props.image} alt="Imagem do produto" />
                <p>R${this.props.value},00 reais</p>
                <button onClick={this.props.click}>Adicionar ao carrinho</button>
            </ProductCardStyle>
        )
    }
}

const ProductCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px 0 5px 0;
    padding: 0 10px 10px 10px;
    flex-wrap: wrap;
    width: 10%;
    height: fit-content;
    font-size: 1rem;
    outline: 1px solid white;
    outline-offset: -1px;
    background-color: #56008b;
    img {
        width: 100%;
        height: 100%;
}
`