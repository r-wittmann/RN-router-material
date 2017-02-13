import React, { Component, PropTypes } from 'react'
import { Button, Text } from 'native-base'
import SceneContainer from './SceneContainer'

class Transactions extends Component {
  render () {
    return (
      <SceneContainer title={'Transactions'} >
        <Text>
            Transaktionen
        </Text>
        <Button
          onPress={() => this.props.goToDetail({ transaction: { id: 1, name: 'Transaktion 1' } })}
          >
          <Text>
              Zu Transaktionsdetails #1
          </Text>
        </Button>
        <Button
          onPress={() => this.props.goToDetail({ transaction: { id: 2, name: 'Transaktion 2' } })}
          >
          <Text>
              Zu Transaktionsdetails #2
          </Text>
        </Button>
        <Button
          onPress={() => this.props.goToDetail({ transaction: { id: 3, name: 'Transaktion 3' } })}
          >
          <Text>
              Zu Transaktionsdetails #3
          </Text>
        </Button>
      </SceneContainer>
    )
  }
}

Transactions.propTypes = {
  goToDetail: PropTypes.func
}

export default Transactions
