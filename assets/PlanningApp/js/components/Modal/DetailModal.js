import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'

@inject('modalStore')
@observer
class DetailModal extends Component {
  handleClick = () => {
    this.props.modalStore.toggleDetailModal()
  }

  render () {
    return (
      <Modal id='date_modal' show={this.props.modalStore.detailModal} onHide={this.handleClick} centered>
        <Modal.Body>
          {/* <div className='text-center' dangerouslySetInnerHTML={{__html: this.props.modalStore.modal_content}}></div> */}
          <div className='text-center'>
            {this.props.modalStore.modal_content}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.handleClick}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default DetailModal
