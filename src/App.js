import React from "react";
import AddItemForm from './shopping-list/AddItemForm';
import ShoppingList from './shopping-list/ShoppingList';

export default class App extends React.Component {
  // Boilerplate test state
  state = {
    shoppingItems: [
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  handleDeleteItem  = (itemToDelete) => {
    const newItems = this.state.shoppingItems.filter(item => item !== itemToDelete)
    this.setState({
      shoppingItems: newItems
    })  
  }

  handleCheckItem = (itemToCheck) => {
    const newItems = this.state.shoppingItems.map(item => {
      if (item === itemToCheck) {
        item.checked = !item.checked
      }
      return item
    })
    this.setState({
      shoppingItems: newItems
    })
  }

  handleAddItem = (itemName) => {
    const newItems = [
      ...this.state.shoppingItems,
      { name: itemName, checked: false }
    ]
    this.setState({
      shoppingItems: newItems
    })
  } 

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm 
              onAddItem={this.handleAddItem}
            />
          </section>
          <section>
            <ShoppingList 
              items={this.state.shoppingItems} 
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    )
  }
}
