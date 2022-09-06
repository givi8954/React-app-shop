import React, { Component } from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/"+ this.props.item.img} />
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <FaRegTrashAlt className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order 