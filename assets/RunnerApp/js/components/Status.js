import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Modal, Button } from 'react-bootstrap'
import '../../css/status.css'

@inject('statusStore','modalStore')
@observer
class Satus extends Component {
  handleClick = e => {
    e.preventDefault()
    this.props.statusStore.changeStatus(e.target.dataset.id)
    this.props.modalStore.toggleReservationModal()
  }

  render () {
    return (
      <div className='w-100 d-flex flex-column align-items-center'>
        <p>Current status: {this.props.status.name}</p>
        <div>
          {this.props.statusStore.status.map(status => <Button key={status.id} data-id={status.id} className='status_btn' onClick={this.handleClick}>{status.name}</Button>)}
        </div>
      </div>
    )
  }
}

export default Satus