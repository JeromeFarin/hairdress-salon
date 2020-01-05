import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'
import moment from 'moment'

@inject('modalStore', 'placeStore')
@observer
class ConfirmModal extends Component {
  handleClick = () => {
    this.props.modalStore.toggleConfirmModal()
  }

  handleConfirm = () => {
    console.log('clicked')
    // this.props.reservationStore.reserve()
    // this.handleClick()
  }

  render () {
    let staff = {
      first_name: ''
    }
    
    const { ...place } = this.props.placeStore.place
    if (Object.keys(place).length !== 0) {
      staff = place.staff
    }
    
    return (
      <Modal show={this.props.modalStore.confirmModal} onHide={this.handleClick} centered>
        <Modal.Header>
          <h4>Reservation resume</h4>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex flex-column align-items-center'>
            <p>With {staff.first_name}</p>
            <p>{moment(place.start).format('dddd D MMMM YYYY')}</p>
            <p>From {moment(place.start).format('HH:mm')} To {moment(place.end).format('HH:mm')}</p>
            <p>For <input type='text' name='name' placeholder='Client name' required/></p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={this.handleConfirm}>Confirm</Button>
          <Button variant='secondary' onClick={this.handleClick}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ConfirmModal
