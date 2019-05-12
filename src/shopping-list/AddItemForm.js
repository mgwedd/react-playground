import React from 'react';
export default class AddItemForm extends React.Component {
    onSubmitForm = (evt) => {
        evt.preventDefault()
        // e.target['inputName'] references `<input name='inputName' />`
        this.props.onAddItem(evt.target.itemToAdd.value)
      }
    render() {
      return (
        <form>
          <input
            name='itemToAdd'
            type='text'
            placeholder='carrots'
            aria-label='Shopping list item'
          />
          <button type='submit'>Add Item</button>
        </form>
      )
    }
  }
