import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import Filter from './components/Filter'
import StaffStore from './store/StaffStore'
import DateStore from './store/DateStore'
import ModalStore from './store/ModalStore'
import Modal from './components/Modal'
import TypeStore from './store/TypeStore'
import ReserveStore from './store/ReserveStore'
import Table from './components/Table'
import SlotStore from './store/SlotStore'
import UnavailabilityStore from './store/UnavailabilityStore'
import ReservationStore from './store/ReservationStore'

class PlanningApp extends Component {
  render() {
    return (
      <div>
        <Modal/>
        <h1>Planning</h1>
        <Filter/>
        <Table/>
      </div>
    )
  }
}

const container = document.getElementById('planning_app_react')

if (container !== null) {
  ReactDOM.render(
    <Provider
      staffStore={StaffStore}
      dateStore={DateStore}
      typeStore={TypeStore}
      reserveStore={ReserveStore}
      slotStore={SlotStore}
      modalStore={ModalStore}
      unavailabilityStore={UnavailabilityStore}
      reservationStore={ReservationStore}
    >
      <PlanningApp />
    </Provider>,
    container
  )
}
