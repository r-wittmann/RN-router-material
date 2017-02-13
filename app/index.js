import React, { Component } from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'

// import PushNotification from 'react-native-push-notification'
// import PushController from './PushController'

import Auth from './scenes/AuthScene'
import Main from './scenes/MainScene'
import Transactions from './scenes/TransactionsScene'
import Detail from './scenes/DetailScene'

class RNTest extends Component {
  render () {
    return (
      <Router>
        <Scene key='root' hideNavBar>
          <Scene
            key='auth'
            component={Auth}
            title='Anmeldung'
            onSubmit={() => Actions.main({type: 'replace'})}
            initial
          />
          <Scene
            key='main'
            component={Main}
            title='Übersicht'
            goToTransactions={() => Actions.transactions()}
          />
          <Scene
            key='transactions'
            component={Transactions}
            title='Transaktionen'
            goToDetail={(transaction) => Actions.detail(transaction)}
          />
          <Scene
            key='detail'
            component={Detail}
            title='Details'
            goBack={() => Actions.pop()}
          />
        </Scene>
      </Router>
    )
  }
}

export default RNTest
