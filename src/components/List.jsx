import React from 'react'
import Card from './Card';

export default function List(props) {
  const { todos } = props;


  //const { getTodos } = props;
  //console.log(getTodos)
  return (
    <section className='grid grid-cols-4 gap-4 p-5'>
      {todos.map((todo, todoIndex) => {
        return (
          <Card key={todoIndex} index={todoIndex} {...props}>{todo}</Card>
        )
      })}

    </section>
  )
}
