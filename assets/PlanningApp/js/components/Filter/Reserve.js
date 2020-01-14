import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('reserveStore', 'typeStore')
@observer
class Reserve extends Component {
  state = {
    hour: 0,
    minute: 0
  }

  handleChange = e => {
    if (e.target.name === 'hour_reserved') {
      this.state.hour = e.target.value * 3600
    } else {
      this.state.minute = e.target.value * 60
    }
    
    this.props.reserveStore.time = this.state.hour + this.state.minute
  }

  render () {
    const type = this.props.typeStore.types.filter(type => type.selected === true)
    let show = false
    if (type.length === 1) {
      if (type[0].id === 1) {
        show = true
      }
    } else {
      show = false
    }
    return (
      <div className='col-3' style={{ visibility: show ? 'visible' : 'hidden' }} onChange={this.handleChange}>
        {/* <input type='number' name='hour_reserved' placeholder='Hour'/>
        <input type='number' name='minute_reserved' placeholder='Minute'/> */}
      </div>
    )
  }
}

export default Reserve