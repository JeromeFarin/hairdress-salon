import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import Selection from './components/Selection'
import PrestationStore from './stores/PrestationStore'
import EditStore from './stores/EditStore'
import ValidationStore from './stores/ValidationStore'
import StatuStore from './stores/StatuStore'
import TaxeStore from './stores/TaxeStore'

class ManagerApp extends Component {
  render () {
    return (
      <div>
        <h1>Manager App</h1>
        <Selection/>
      </div>
    )
  }
}

if (document.getElementById('manager_app_react') !== null) {
  ReactDOM.render(
    <Provider
      prestationStore={PrestationStore}
      editStore={EditStore}
      validationStore={ValidationStore}
      statuStore={StatuStore}
      taxeStore={TaxeStore}
    >
      <ManagerApp />
    </Provider>,
    document.getElementById('manager_app_react')
  )
}

