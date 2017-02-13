import React, { Component, PropTypes } from 'react'
import { Button, Text } from 'native-base'
import SceneContainer from './SceneContainer'

class Auth extends Component {
  render () {
    return (
      <SceneContainer title={'Auth Scene'} hideBack>
        <Button onPress={this.props.onSubmit}>
          <Text>
            Anmelden
          </Text>
        </Button>
      </SceneContainer>
    )
  }
}

Auth.propTypes = {
  onSubmit: PropTypes.func
}

export default Auth
