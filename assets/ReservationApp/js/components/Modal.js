import React, { Component } from 'react'
import PlaceModal from './Modal/PlaceModal'
import MonthModal from './Modal/MonthModal'
import StaffModal from './Modal/StaffModal'
import PrestationModal from './Modal/PrestationModal'
import ConfirmModal from './Modal/ConfirmModal'
import FlashUserModal from './Modal/FlashUserModal'

export default class Modal extends Component {
  render () {
    return (
      <div id='modals'>
        <PlaceModal />
        <MonthModal />
        <StaffModal />
        <PrestationModal />
        <ConfirmModal />
        <FlashUserModal />
      </div>
    )
  }
}
