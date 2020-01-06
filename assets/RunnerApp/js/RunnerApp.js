import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider, inject, observer } from 'mobx-react'
import Filter from './components/Filter'
import StaffStore from './store/StaffStore'
import DateStore from '../../store/DateStore'
import ModalStore from '../../store/ModalStore'
import Modal from './components/Modal'
import Table from './components/Table'
import SlotStore from './store/SlotStore'
import ReservationStore from './store/ReservationStore'
import UserStore from './store/UserStore'
import StatusStore from './store/StatusStore'

@inject('staffStore','dateStore','slotStore','reservationStore','userStore','statusStore')
@observer
class RunnerApp extends Component {
  componentDidMount () {
    this.props.staffStore.load()
    this.props.userStore.load()
    this.props.dateStore.loadOpened()
    this.props.reservationStore.loadReservations()
    this.props.slotStore.loadSlots()
    this.props.statusStore.load()
  }

  render() {
    return (
      <div>
        <Modal/>
        <Filter/>
        <Table/>
      </div>
    )
  }
}

const container = document.getElementById('runner_app_react')

if (container !== null) {
  ReactDOM.render(
    <Provider
      userStore={UserStore}
      staffStore={StaffStore}
      dateStore={DateStore}
      slotStore={SlotStore}
      modalStore={ModalStore}
      reservationStore={ReservationStore}
      statusStore={StatusStore}
    >
      <RunnerApp />
    </Provider>,
    container
  )
}
