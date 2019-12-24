import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('reserveStore', 'typeStore')
@observer
class Reserve extends Component {
  render () {
    const type = this.props.typeStore.types.filter(type => type.selected === true)
    let input
    if (type.length === 1) {
      if (type[0].id === 1) {
        input = <input type='text' name='time_reserved' placeholder='Time reserved'/>
      }
    }
    return (
      <div className='col-3'>
        {input}
      </div>
    )
  }
}

export default Reserve