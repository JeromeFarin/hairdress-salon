import React, { Component } from 'react'
import moment from 'moment'
import '../../../css/cell.css'
import { inject, observer } from 'mobx-react'

@inject('modalStore','prestationStore','placeStore')
@observer
class Cell extends Component {
  handleClick = (e) => {
    if (this.props.prestationStore.selectedPrestations().length > 0) {
      if (isNaN(e.target.dataset.slotId)) {
        this.props.placeStore.slotId = e.target.parentNode.dataset.slotId
      } else {
        this.props.placeStore.slotId = e.target.dataset.slotId
      }
      this.props.modalStore.togglePlaceModal()
    } else {
      this.props.modalStore.togglePrestationModal()
      this.props.modalStore.staffWay = false
    }
  }

  render () {
    return (
      <div 
        style={{
          height: '400px',
          position: 'absolute',
          width: '80%',
          marginLeft: `${this.props.interval}0px`
        }}
        className='cell'
      >
        {this.props.values.map(value => {
          let isVisible = true
          if (parseInt(value.type) !== 1 || (moment(value.end) - moment(value.start)) < this.props.prestationStore.getTime()) {
            isVisible = false
          }
          
          return (
            <div
              key={`${value.type}_${value.start}`}
              style={{
                height: `${value.size}%`,
                backgroundColor: value.type == 2 ? 'grey' : value.type == 3 ? 'orange' : value.staff.color,
                borderRadius: '10px',
                border: `3px solid ${value.staff.color}`,
                visibility: isVisible ? 'visible' : 'hidden',
                position: 'relative'
              }}
              className='d-flex flex-column justify-content-between custom_cell'
              onClick={this.handleClick}
              data-slot-id={value.id}
            >
              <span>{moment(value.start).format('HH:mm')}</span>
              <span>{moment(value.end).format('HH:mm')}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Cell