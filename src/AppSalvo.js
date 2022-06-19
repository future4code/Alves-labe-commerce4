// import React from 'react'
// import styled from 'styled-components'
// import Products from './components/Products'
// import Cart from './components/Cart'
// import Filters from './components/Filters'

// class App extends React.Component {

//   state = {
//     productsList:
//         [{
//             name: 'Produto 1',
//             id: 1,
//             image: "https://picsum.photos/200/201",
//             value: 100
//         },
//         {
//             name: 'Produto 2',
//             id: 2,
//             image: "https://picsum.photos/200/202",
//             value: 90
//         },
//         {
//             name: 'Produto 3',
//             id: 3,
//             image: "https://picsum.photos/200/203",
//             value: 80
//         },
//         {
//             name: 'Produto 4',
//             id: 4,
//             image: "https://picsum.photos/200/204",
//             value: 70
//         },
//         {
//             name: 'Produto 5',
//             id: 5,
//             image: "https://picsum.photos/200/205",
//             value: 60
//         },
//         ]
//   }

//   newProductsList = [...this.state.productsList]
  
//   render() {

    // const mapProducts = this.newProductsList.map((product)=>{
    //   return <Products 
    //   key={product.id}
    //   name={product.name}
    //   image={product.image}
    //   value={product.value}
    //   />     
    // })

//     return (
//       <BodyStyle>
//         <HeaderStyle><p>Nome da Loja</p></HeaderStyle>
//         <SubContainerStyle>
//         <DivFiltersStyle>
//           <Filters/>
//         </DivFiltersStyle>
//         <MainStyle>
//           {mapProducts}
//         </MainStyle>
//         <DivUserCartStyle>
//           <p>Carrinho:</p>
//           <Cart 
//           name={this.newProductsList[0].name}
//           value={this.newProductsList[0].value}
//           />
//           </DivUserCartStyle>
//         </SubContainerStyle>
//         <FooterStyle><p>Aqui o Footer</p></FooterStyle>
//       </BodyStyle>
//     )
//   }
// }
// export default App

// const BodyStyle = styled.body`
// display: flex;
// width: 100vw;
// height: 100vh;
// flex-direction: column;
// `
// const HeaderStyle = styled.header`
// display: flex;
// width: 100%;
// height: 10%;
// justify-content: center;
// background-color: red;
// `

// const SubContainerStyle = styled.div`
// display: flex;
// width: 100%;
// height: 80%;
// `

// const DivFiltersStyle = styled.section`
// display: flex;
// width: 20%;
// height: 100%;
// background-color: blue;
// justify-items: auto;
// input {
//   padding: 3px;
//   margin: 3px;
// }
// `

// const MainStyle = styled.main`
// display: flex;
// flex-wrap: wrap;
// width: 70%;
// height: 100%;
// background-color: yellow;
// flex-direction: row;
// justify-content: space-around;
// `

// const DivUserCartStyle = styled.section`
// display: flex;
// flex-direction: column;
// width: 15%;
// height: 100%;
// background-color: purple;
// `

// const FooterStyle = styled.footer`
// display: flex;
// width: 100%;
// height: 10%;
// justify-content: center;
// background-color: green;
// `