import React, { Component } from 'react'
import GlobalStyle from './styles/global'

import { Container, Content } from './styles'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Content>Teste</Content>
        <GlobalStyle />
      </Container>
   
    )
  }
}