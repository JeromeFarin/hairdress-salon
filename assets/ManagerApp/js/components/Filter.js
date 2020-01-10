import React, { Component } from 'react'

class Filter extends Component {
  state = {
    filters: [
      'last_name',
      'first_name',
      'roles',
      'name',
      'make_time',
      'price_ht',
      'start',
      'end',
      'hire_date'
    ]
  }
  handleChange = e => {
    const tds = this.props.store.tds_loaded.map(td => {
      for (let i = 0; i < this.state.filters.length; i++) {
        if (td[this.state.filters[i]] != null && this.state.filters[i] == 'roles') {
          for (let j = 0; j < td[this.state.filters[i]].length; j++) {
            if (this.checkValue(td[this.state.filters[i]], e.target.value)) {
              return td
            }
          }
        }

        if (this.checkValue(td[this.state.filters[i]], e.target.value)) {
          return td
        }
      }
    })

    this.props.store.tds = tds.filter(td => td != null)
    
  }

  checkValue (first, second) {
    if (first != null && String(first).toLowerCase().search(second.toLowerCase()) > -1) {
      return true
    }
    return false
  }

  render () {
    return (
      <div>
        <input type='text' placeholder='Filter' onChange={this.handleChange}/><br/><br/>
      </div>
    )
  }
}

export default Filter
