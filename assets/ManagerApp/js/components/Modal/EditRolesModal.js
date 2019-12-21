import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { inject, observer } from 'mobx-react'

@inject('modalStore', 'userStore')
@observer
class EditRolesModal extends Component {
  state = {
    roles: ['ROLE_ADMIN','ROLE_STAFF','ROLE_CLIENT'],
    selected: []
  }

  handleClick = () => {
    this.props.modalStore.toggleEditRolesModal()
  }

  handleChange = (e) => {
    let selected = []

    for (let i = 0, len = e.target.options.length; i < len; i++) {
      if (event.target.options[i].selected) {
        selected.push(event.target.options[i].value)
      }
    }

    this.setState({ selected })
  }

  handleConfirm = (e) => {
    e.preventDefault()
    window.fetch('/admin/api/user/roles', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        id: e.target.dataset.id,
        value: this.state.selected
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (JSON.parse(data) == true) {
          this.props.modalStore.toggleEditRolesModal()
          location.reload()
        }
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  render () {
    let user = {}
    if (this.props.userStore.user > 0) {
      user = this.props.userStore.users.find((user) => user.id == this.props.userStore.user)
    }
    return (
      <Modal id='edit_roles_modal' show={this.props.modalStore.edit_roles_modal} onHide={this.handleClick} centered>
        <Modal.Header>
          <h3>Edit Roles</h3>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column align-items-center'>
          <form id='edit_roles_form' onSubmit={this.handleConfirm} data-id={user.id}>
            <select onChange={this.handleChange} defaultValue={user.roles} name='roles' multiple>
              {this.state.roles.map(elt => {
                return <option key={elt} value={elt}>{elt}</option>
              })}
            </select>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' type='submit' disabled={this.state.selected.length > 0 ? false : true} form='edit_roles_form'>Confirm</Button>
          <Button variant='secondary' onClick={this.handleClick}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default EditRolesModal
