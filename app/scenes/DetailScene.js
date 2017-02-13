import React, { Component, PropTypes } from 'react'
import { Text } from 'native-base'
import SceneContainer from './SceneContainer'

class Detail extends Component {
  render () {
    return (
      <SceneContainer title={'Auth Scene'}>
        <Text>
          {this.props.transaction.name}
        </Text>
      </SceneContainer>
    )
  }
}

Detail.propTypes = {
  transaction: PropTypes.object,
  goBack: PropTypes.func
}

export default Detail
