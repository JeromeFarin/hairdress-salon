import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'

@inject('modalStore', 'placeStore', 'userStore', 'unavailabilityStore')
@observer
class FlashUserModal extends Component {
  handleClick = () => {
    this.props.modalStore.toggleFlashUserModal()
  }

  handleConfirm = (e) => {
    e.preventDefault()
    const request = {}
    request.first_name = document.getElementById("modal_first_name").value
    request.last_name = document.getElementById("modal_last_name").value
    request.phone = document.getElementById("modal_phone").value
    request.email = document.getElementById("modal_email").value
    request.gender = document.querySelector('input[name="modal_gender"]:checked').value;

    this.props.userStore.flashUser(request)

    this.props.modalStore.toggleFlashUserModal()
    this.props.modalStore.toggleConfirmModal()
  }

  render () {
    return (
      <Modal show={this.props.modalStore.flashUserModal} onHide={this.handleClick} centered>
        <Modal.Header>
          <h4>That is you ?</h4>
        </Modal.Header>
        <Modal.Body>
          <form id='modal_form'>
            <div className="form-group">
              <label htmlFor="modal_first_name">First Name</label>
              <input type="text" id="modal_first_name" className="form-control" name="modal_first_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="modal_last_name">Last Name</label>
              <input type="text" id="modal_last_name" className="form-control" name="modal_last_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="modal_gender">Gender</label>
              <div className="form-check">
                <input id="modal_gender_1" type="radio" className="form-check-input" name="modal_gender" value="1" required/>
                <label htmlFor="modal_gender_1" className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input id="modal_gender_2" type="radio" className="form-check-input" name="modal_gender" value="2" required/>
                <label htmlFor="modal_gender_2" className="form-check-label">Female</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="modal_phone">Phone</label>
              <input type="tel" id="modal_phone" className="form-control" name="modal_phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="modal_email">Email</label>
              <input type="email" id="modal_email" className="form-control" name="modal_email" required />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' form="modal_form" type='submit' onClick={this.handleConfirm}>Confirm</Button>
          <Button variant='secondary' onClick={this.handleClick}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default FlashUserModal
