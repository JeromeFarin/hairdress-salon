import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Provider, inject, observer } from 'mobx-react'
import PrestationStore from './stores/PrestationStore'
import EditStore from './stores/EditStore'
import ValidationStore from './stores/ValidationStore'
import StatusStore from './stores/StatusStore'
import TaxeStore from './stores/TaxeStore'
import Table from './components/Table'
import UserStore from './stores/UserStore'
import EditRolesModal from './components/Modal/EditRolesModal'
import ModalStore from './stores/ModalStore'
import Filter from './components/Filter'

@inject('prestationStore', 'statusStore', 'taxeStore', 'userStore')
@observer
class ManagerApp extends Component {
  state = {
    store: {}
  }

  componentDidMount() {
    switch (this.props.type) {
      case 'prestation':
        this.props.prestationStore.load()
        this.setState({store : this.props.prestationStore})
        break;

      case 'status':
        this.props.statusStore.load()
        this.setState({store : this.props.statusStore})
        break;

      case 'taxe':
        this.props.taxeStore.load()
        this.setState({store : this.props.taxeStore})
        break;

      case 'user':
        this.props.userStore.load()
        this.setState({store : this.props.userStore})
        break;
    }
  }

  render () {
    return (
      <div>
        <EditRolesModal/>
        <Filter store={this.state.store}/>
        <Table type={this.props.type} ths={this.state.store.ths != null ? this.state.store.ths : []} tds={this.state.store.tds != null ? this.state.store.tds : []}/>
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
      statusStore={StatusStore}
      taxeStore={TaxeStore}
      userStore={UserStore}
      modalStore={ModalStore}
    >
      <ManagerApp type={document.getElementById('manager_app_react').dataset.type} />
    </Provider>,
    document.getElementById('manager_app_react')
  )
}

