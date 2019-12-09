import React, { Component } from 'react'
import Table from './Table'
import { inject, observer } from 'mobx-react'

@inject('prestationStore', 'statuStore', 'taxeStore', 'editStore' , 'validationStore')
@observer
class Selection extends Component {
  state = {
    ths: [],
    tds: []
  }

  componentDidMount () {
    this.props.prestationStore.loadPrestations()
    this.props.statuStore.loadStatus()
    this.props.taxeStore.loadTaxes()
  }
  
  handlePrestations = () => {
    const ths = Object.keys(this.props.prestationStore.prestations[0]).filter(th => th !== 'reservation_infos' && th !== 'id')
    const tds = this.props.prestationStore.prestations
    this.setState({ ths, tds })
    this.props.editStore.values = {}
    this.props.validationStore.errors = {}
  }

  handleStatus = () => {
    const ths = Object.keys(this.props.statuStore.status[0]).filter(th => th !== 'id' && th != 'reservations')
    const tds = this.props.statuStore.status
    this.setState({ ths, tds })
    this.props.editStore.values = {}
    this.props.validationStore.errors = {}
  }

  handleTaxes = () => {
    const ths = Object.keys(this.props.taxeStore.taxes[0]).filter(th => th !== 'id' && th !== 'reservation_infos')
    const tds = this.props.taxeStore.taxes
    this.setState({ ths, tds })
    this.props.editStore.values = {}
    this.props.validationStore.errors = {}
  }

  render () {
    return (
      <div>
        <nav className="nav justify-content-center">
          <a className="nav-link" href="#" onClick={this.handlePrestations}>Prestations</a>
          <a className="nav-link" href="#" onClick={this.handleStatus}>Status</a>
          <a className="nav-link" href="#" onClick={this.handleTaxes}>Taxes</a>
        </nav>

        <Table ths={this.state.ths} tds={this.state.tds}/>
      </div>
    )
  }
}

export default Selection
