import React from 'react'

export default function ShoppingItem(props) {
  return (
    <li>
    <h2 style={{
        textDecoration: props.item.checked ? 'line-through' : null,
    }}>
    {props.item.name}
    </h2>
    <button 
        onClick={() => props.onCheckItem(props.item)}
        type='button'>
        Check
    </button>
      <button 
        onClick={() => props.onDeleteItem(props.item)}
        type='button'>
        Delete
    </button>
    </li>
  )
}

ShoppingItem.defaultProps = {
  item: {}
}