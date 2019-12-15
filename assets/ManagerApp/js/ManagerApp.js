import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Provider, inject, observer } from 'mobx-react'
import PrestationStore from './stores/PrestationStore'
import EditStore from './stores/EditStore'
import ValidationStore from './stores/ValidationStore'
import StatuStore from './stores/StatuStore'
import TaxeStore from './stores/TaxeStore'
import Table from './components/Table'

@inject('prestationStore', 'statuStore', 'taxeStore')
@observer
class ManagerApp extends Component {
  state = {
    store: {}
  }

  componentDidMount() {
    switch (this.props.type) {
      case 'prestations':
        this.props.prestationStore.loadPrestations()
        this.setState({store : this.props.prestationStore})
        break;

      case 'status':
        this.props.statuStore.loadStatus()
        this.setState({store : this.props.statuStore})
        break;

      case 'taxes':
        this.props.taxeStore.loadTaxes()
        this.setState({store : this.props.taxeStore})
        break;
    }
  }

  render () {
    let ths = []
    let tds = []
    
    if (this.state.store.ths != null) {
      ths = this.state.store.ths
      tds = this.state.store.tds
    }

    return (
      <Table ths={ths} tds={tds}/>
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
      <ManagerApp type={document.getElementById('manager_app_react').dataset.type} />
    </Provider>,
    document.getElementById('manager_app_react')
  )
}

