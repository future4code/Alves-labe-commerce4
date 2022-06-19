import React, { Component } from 'react'
import styled from 'styled-components'

export default class Cart extends Component {
  render() {
    return (
      <div>
        <P>{this.props.name} - R${this.props.value},00 reais</P>        
      </div>
    )
  }
}

const P = styled.p`
background-color: black;
color: white;
outline: 1px solid white;
outline-offset: -1px;
margin: 0px 5px 0px 5px;
`
