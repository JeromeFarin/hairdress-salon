import React, { Component } from 'react'
import MonthModal from './Modal/MonthModal'
import DetailModal from './Modal/DetailModal'
import PlaceModal from './Modal/PlaceModal'
import ConfirmModal from './Modal/ConfirmModal'

export default class Modal extends Component {
  render () {
    return (
      <div id='modals'>
        <MonthModal/>
        <DetailModal/>
        <PlaceModal/>
        <ConfirmModal/>
      </div>
    )
  }
}
