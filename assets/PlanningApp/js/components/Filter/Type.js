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
                backgroundColor: type.color,
                opacity: type.selected ? 1 : 0.4,
                margin: '3px',
                textAlign: 'center',
                borderRadius: '5px',
                boxShadow: '0 0 5px #5e3718',
                cursor: 'pointer'
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