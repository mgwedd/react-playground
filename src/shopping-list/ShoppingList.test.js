import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ShoppingList from './ShoppingList';

describe(`ShoppingList component`, () => {
  it('renders empty given no items', () => {
    const wrapper = shallow(<ShoppingList />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders ShoppingItems when supplied with an items prop', () => {
    const testItems = [
      { name: 'test item 1', checked: false },
      { name: 'another test item', checked: true },
      { name: 'test item number three', checked: false },
    ]
    const wrapper = shallow(<ShoppingList items={testItems} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
