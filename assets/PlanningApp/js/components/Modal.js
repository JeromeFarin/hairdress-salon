import React, { Component } from 'react'
import MonthModal from './Modal/MonthModal'
import DetailModal from './Modal/DetailModal'

export default class Modal extends Component {
  render () {
    return (
      <div id='modals'>
        <MonthModal/>
        <DetailModal/>
      </div>
    )
  }
}
