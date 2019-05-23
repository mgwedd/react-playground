import React from 'react'
import GrandChild from './GrandChild'

export default function Child() {
  return (
    <main role='main' className='Child'>
      <GrandChild />
    </main>
  );
}