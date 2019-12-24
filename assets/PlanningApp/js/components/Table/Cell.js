import React, { Component } from 'react'
import moment from 'moment'
import '../../../css/cell.css'
import { inject, observer } from 'mobx-react'

@inject('typeStore')
@observer
class Cell extends Component {
  render () {
    return (
      <div style={{
        height: '400px',
        position: 'absolute',
        width: '80%',
        marginLeft: `${this.props.interval}0px`
      }}>
        {this.props.values.map(value => {
          return (
            <div
              key={`${value.type}_${value.start}`}
              style={{
                height: `${value.size}%`,
                backgroundColor: value.type == 2 ? 'grey' : value.type == 3 ? 'orange' : value.staff.color,
                borderRadius: '10px',
                visibility: this.props.typeStore.types.filter(type => type.selected).find(type => type.id == value.type) ? '' : 'hidden'
              }}
              className='d-flex flex-column justify-content-between custom_cell'
            >
              <span>{moment(value.start).format('HH:mm')}</span>
              <span>{value.type}</span>
              <span>{moment(value.end).format('HH:mm')}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Cell