import React, { Component } from 'react'
import styled from 'styled-components'

export default class Filters extends Component {
  render() {
    return (
        <FilterContainerStyle>
        <h3>Filtros</h3>
        <input
        type="number"
        onChange={this.props.changeMin} 
        value={this.props.filterMin}
        placeholder="Valor mínimo"/>
        <input
        type="number"
        onChange={this.props.changeMax} 
        value={this.props.filterMax} 
        placeholder="Valor máximo" />
        <input 
        onChange={this.props.changeName} 
        value={this.props.filterName} 
        placeholder="Busca por nome" />
      </FilterContainerStyle>
    )
  }
}

const FilterContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input{
      width: 80%;
      background: white;
      outline: 2px solid purple;
      outline-offset: -2px;
      
  }
`