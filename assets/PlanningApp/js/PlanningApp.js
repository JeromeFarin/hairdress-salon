import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider, inject, observer } from 'mobx-react'
import Filter from './components/Filter'
import StaffStore from './store/StaffStore'
import DateStore from '../../store/DateStore'
import ModalStore from '../../store/ModalStore'
import Modal from './components/Modal'
import TypeStore from './store/TypeStore'
import ReserveStore from './store/ReserveStore'
import Table from './components/Table'
import SlotStore from './store/SlotStore'
import UnavailabilityStore from './store/UnavailabilityStore'
import PlaceStore from './store/PlaceStore'

@inject('staffStore','dateStore','slotStore','unavailabilityStore')
@observer
class PlanningApp extends Component {
  componentDidMount () {
    this.props.staffStore.load()
    this.props.dateStore.loadOpened()
    this.props.unavailabilityStore.load()
    this.props.slotStore.loadSlots()
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
      placeStore={PlaceStore}
    >
      <PlanningApp />
    </Provider>,
    container
  )
}
