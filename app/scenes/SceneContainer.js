import React, { Component } from 'react'
import { Container, Header, Left, Body, Right, Title, Content, Button, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'

class ParentScene extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left>
            {!this.props.hideBack &&
              <Button transparent onPress={() => Actions.pop()}>
                <Icon name='arrow-back' />
              </Button>
            }
          </Left>
          <Body>
            <Title>
              {this.props.title}
            </Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          {this.props.children}
        </Content>
      </Container>
    )
  }
}

export default ParentScene
