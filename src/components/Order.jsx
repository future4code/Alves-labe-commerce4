import React, { Component } from 'react'
import styled from 'styled-components'

export default class Order extends Component {
  render() {
    return (        
        <OrderContainerStyle>
            <h3>Número de produtos: {this.props.qtt}</h3>
          <label for="order">Ordenação:</label>
          <select name="order"
            value={this.props.filterOrder}
            onChange={this.props.changeOrder}
          >
            <option value={1}>Crescente</option>
            <option value={-1}>Decrescente</option>
          </select>
        </OrderContainerStyle>
    )
  }
}

const OrderContainerStyle = styled.div`
display: flex;
width: 100%;
height: 10%;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
h3{
    margin-right: 25%;
}
label{
    margin-right: 5px;
}
`


