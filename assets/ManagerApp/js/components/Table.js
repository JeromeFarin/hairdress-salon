import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import moment from 'moment'

@inject('editStore', 'validationStore', 'prestationStore', 'statuStore', 'taxeStore')
@observer
class Table extends Component {
  handleClick = () => {
    $(':focus').blur()
    if (Object.keys(this.props.validationStore.errors).length == 0 && Object.keys(this.props.editStore.values).length > 0) {
      this.props.editStore.saveValues()
    }
    
  }

  handleChange = (e) => {
    this.props.validationStore.validate(e)
    this.props.editStore.updateValues(e, this.props.tds)
  }

  handleBlur = (e) => {
    this.props.validationStore.validate(e)
  }

  handleRow = (e) => {
    if (this.props.tds.find((td) => td.id == 'new') == null) {
      let new_row = {}
      Object.assign(new_row, {id: 'new'})
      this.props.ths.map((th) => {
        if (th == 'make_time') {
          Object.assign(new_row, {[th]: moment().hour(0).minute(0).second(0)})
        } else {
          Object.assign(new_row, {[th]: ''})
        }
      })
      this.props.tds.push(new_row)
      $(e.target).attr('class', 'fa fa-minus-circle')
    } else {
      this.props.tds.pop()
      $(e.target).attr('class', 'fa fa-plus-circle')
      delete this.props.editStore.values['new']
      Object.keys(this.props.validationStore.errors).forEach(element => {
        if (!element.search("new")) {
          delete this.props.validationStore.errors[element]
        }
      });
    }
  }

  render () {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClick} disabled={Object.keys(this.props.validationStore.errors).length == 0 && Object.keys(this.props.editStore.values).length > 0 ? false : true }>Save ALL change</button>
        <table className='table text-center'>
          <thead>
            <tr>
              {this.props.ths.map((th) => <th key={th.name}>{th.name.charAt(0).toUpperCase() + th.name.slice(1).replace('_', ' ')}</th>)}
            </tr>
          </thead>
          <tbody>
            {this.props.tds.map((td) => (
                <tr key={td.id} onChange={this.handleChange}>
                  {this.props.ths.map(th => (
                      <td key={`${td.id}_${th.name}`}>
                        <input {...this.props.editStore.formatValue(td,th)} />
                      </td>
                  ))}
                </tr>
            ))}
          </tbody>
        </table>
        <i className='fa fa-plus-circle' onClick={this.handleRow} aria-hidden="true"></i><br/>
        <button className="btn btn-primary" disabled={Object.keys(this.props.validationStore.errors).length == 0 && Object.keys(this.props.editStore.values).length > 0 ? false : true } onClick={this.handleClick}>Save ALL change</button>
      </div>
    )
  }
}

export default Table
