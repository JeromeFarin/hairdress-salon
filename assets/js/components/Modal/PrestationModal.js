import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'
import '../../../css/prestation_modal.css'
import moment from 'moment'

@inject('modalStore', 'prestationStore')
@observer
class PrestationModal extends Component {
  componentDidUpdate () {
    this.props.prestationStore.loadSelected()
  }

  handleModal = () => {
    this.props.modalStore.togglePrestationModal()
  }

  handleClick = (event) => {
    this.props.prestationStore.prestationUpdate(event.target.value)
  }

  handleConfirm = () => {
    if (this.props.modalStore.staffWay) {
      this.props.modalStore.toggleStaffModal()
    }
    this.props.modalStore.togglePrestationModal()
  }

  render () {
    const [...prestations] = this.props.prestationStore.prestations
    let selected = ''
    if (this.props.prestationStore.isSelected) {
      selected = (
        <em>Please, select at least one prestation</em>
      )
    }

    return (
      <Modal id='prestation_modal' show={this.props.modalStore.prestationModal} onHide={this.handleModal} centered>
        <Modal.Header>
          <h3>Choose your prestations</h3>
        </Modal.Header>
        <Modal.Body>
          {prestations.map((prestation) => (
            <li
              key={prestation.id}
              onClick={this.handleClick}
              value={prestation.id}
              className={prestation.selected ? 'selected' : ''}
            >
              {prestation.name} ({moment(prestation.makeTime).format('HH:mm')})
            </li>
          ))}
          <em>You have possibility to change after</em>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' href='/contact'>{'I\'dont know'}</Button>
          <div className='w-100'>
            {selected}
          </div>
          <Button variant='primary' onClick={this.handleConfirm} disabled={this.props.prestationStore.isSelected ? 'disable' : ''}>Confirm</Button>
          <Button variant='secondary' onClick={this.handleModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default PrestationModal
