import React, { Component } from 'react'
import moment from 'moment'
import '../../../css/cell.css'
import { inject, observer } from 'mobx-react'

@inject('typeStore','slotStore','modalStore','reserveStore','placeStore')
@observer
class Cell extends Component {
  handleClick = e => {
    let id = 0
    if (e.target.dataset.id == null) {
      id = e.target.parentNode.dataset.id
    } else {
      id = e.target.dataset.id
    }

    const value = this.props.slotStore.slots.find(slot => parseInt(slot.id) === parseInt(id))
    switch (parseInt(value.type)) {
      // available
      case 1:
        // const type = this.props.typeStore.types.filter(type => type.selected === true)
        // if (type.length === 1) {
          // if (type[0].id === 1) {
          //   this.props.placeStore.slotId = id

          //   this.props.placeStore.loadPlaces()
            // this.props.modalStore.togglePlaceModal()
            // this.props.modalStore.modal_content = (<p>It's OK</p>)
        //   }
        // } else {
          this.props.modalStore.modal_content = (<p>{value.staff.first_name} is available from {moment(value.start).format('HH:mm')} to {moment(value.end).format('HH:mm')}</p>)
          this.props.modalStore.toggleDetailModal()
        // }
        break;

      // absent
      case 2:
        this.props.modalStore.modal_content = (<p>{value.staff.first_name} is absent from {moment(value.start).format('HH:mm')} to {moment(value.end).format('HH:mm')}</p>)
        this.props.modalStore.toggleDetailModal()
        break;

      // busy - reservation
      case 3:
        this.props.modalStore.modal_content = (<p>{value.staff.first_name} is busy from {moment(value.start).format('HH:mm')} to {moment(value.end).format('HH:mm')}</p>)
        this.props.modalStore.toggleDetailModal()
        break;
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
          if (!this.props.typeStore.getSelected().find(type => type.id == value.type)) {
            isVisible = false
          }
          
          if ((moment(value.end).unix() - moment(value.start).unix()) < this.props.reserveStore.time) {
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
              className='d-flex flex-column justify-content-center custom_cell'
              onClick={this.handleClick}
              data-id={value.id}
            >
              <span>{moment(value.start).format('HH:mm')} - {moment(value.end).format('HH:mm')}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Cell