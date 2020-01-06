import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'
import moment from 'moment'

@inject('modalStore','slotStore')
@observer
class ReservationModal extends Component {
  handleClick = () => {
    this.props.modalStore.toggleReservationModal()
  }

  render () {
    const { ...slot } = this.props.slotStore.getSelectedSlot()
    const { ...reservation } = slot.reservation
    const { ...client } = reservation.client
    const { ...staff } = reservation.staff
    return (
      <Modal id='detail_modal' show={this.props.modalStore.reservation_modal} onHide={this.handleClick} centered>
        <Modal.Body>
          <div className='text-center'>
            <h4>{client.first_name} {client.last_name}</h4>
            <p>From {moment(slot.start).format('Do MMMM YYYY, HH:mm')} to {moment(slot.end).format('Do MMMM YYYY, HH:mm')}</p>
            <p>With {staff.first_name}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.handleClick}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ReservationModal
