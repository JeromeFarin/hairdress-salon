import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('reserveStore', 'typeStore')
@observer
class Reserve extends Component {
  state = {
    show: false
  }

  render () {
    const type = this.props.typeStore.types.filter(type => type.selected === true)
    if (type.length === 1) {
      if (type[0].id === 1) {
        this.state.show = true
      }
    } else {
      this.state.show = false
    }
    return (
      <div className='col-3' style={{ visibility: this.state.show ? 'visible' : 'hidden' }}>
        <input type='number' name='hour_reserved' placeholder='Hour'/>
        <input type='number' name='minute_reserved' placeholder='Minute'/>
      </div>
    )
  }
}

export default Reserve