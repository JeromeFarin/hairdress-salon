import React, { Component } from 'react'
import moment from 'moment'
import '../../../css/cell.css'
import { inject, observer } from 'mobx-react'

@inject('slotStore','userStore','modalStore')
@observer
class Cell extends Component {
  handleClick = e => {
    if (e.target.dataset.id == null) {
      this.props.slotStore.selected_slot = e.target.parentNode.dataset.id
    } else {
      this.props.slotStore.selected_slot = e.target.dataset.id
    }
    this.props.modalStore.toggleReservationModal()
  }

  render () {
    const { ...values } = this.props.values
    return (
      <div 
        className='custom_cell d-flex justify-content-around align-items-center'
        data-id={values.id}
        style={{
          height: `${values.size}%`,
          border: `5px solid ${values.staff.color}`,
          backgroundColor: values.type == 2 ? values.reservation.status.color : '#a1ff9c',
          width: '90%',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
        onClick={values.type == 2 ? this.handleClick : this.handleNull}
      >
        <p>{moment(values.start).format('HH:mm')}</p>
        <p>{values.reservation != null ? `${values.reservation.client.first_name} ${values.reservation.client.last_name.toUpperCase()}` : 'Free'}</p>
        <p>{moment(values.end).format('HH:mm')}</p>
      </div>
    )
  }
}

export default Cell