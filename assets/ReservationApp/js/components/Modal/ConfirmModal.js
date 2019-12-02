import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'
import moment from 'moment'

@inject('modalStore', 'placeStore', 'userStore', 'reservationStore', )
@observer
class ConfirmModal extends Component {
  handleClick = () => {
    this.props.modalStore.toggleConfirmModal()
  }

  handleConfirmWithoutLogin = () => {
    this.props.modalStore.toggleConfirmModal()
    this.props.modalStore.toggleFlashUserModal()
  }

  handleConfirm = () => {
    this.props.reservationStore.reserve()
    this.handleClick()
  }

  render () {
    let staff = {
      first_name: ''
    }
    let prestations = []
    const { ...place } = this.props.placeStore.place
    if (Object.keys(place).length !== 0) {
      staff = place.staff
      place.prestations.map((prestation) => {
        prestations.push(prestation.name)
      })
      
    }

    const connected = this.props.userStore.connectedUser !== null
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
            <p>For {prestations.join(',')}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {connected === true ?
              <Button variant='primary' onClick={this.handleConfirm}>Confirm</Button>
            : 
              <div className='d-flex'>
                <Button variant='primary' onClick={this.handleConfirmWithoutLogin}>Continue without you Login</Button>
                <Button variant='' disabled>OR</Button>
                <Button variant='primary' href='/login'>Login</Button>
              </div>
          }
          <Button variant='secondary' onClick={this.handleClick}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ConfirmModal
