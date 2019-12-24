import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('typeStore')
@observer
class Type extends Component {
  handleClick = e => {
    this.props.typeStore.updateType(e.target.dataset.id)
  }

  render () {
    return (
      <ul className='col-3' style={{ listStyle: 'none' }}>
        {this.props.typeStore.types.map(type => {
          return (
            <li
              key={type.id}
              style={{
                border: type.selected ? '1px solid #000' : 'none'
              }}
              onClick={this.handleClick}
              data-id={type.id}
            >
              {type.name}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Type