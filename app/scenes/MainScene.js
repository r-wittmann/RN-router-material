import React, { Component, PropTypes } from 'react'
import { Button, Text } from 'native-base'
import SceneContainer from './SceneContainer'

class Main extends Component {
  render () {
    return (
      <SceneContainer title={'Main Scene'} hideBack>
        <Text>
          Übersicht
        </Text>
        <Button onPress={this.props.goToTransactions}>
          <Text>
            Zu den Transaktionen
          </Text>
        </Button>
      </SceneContainer>
    )
  }
}

Main.propTypes = {
  goToTransactions: PropTypes.func
}

export default Main
