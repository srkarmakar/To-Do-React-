import React from 'react'

export default function Card(props) {
  const { children, deleteTodos, index, editTodo } = props;
  return (
    <article className='w-full'>
      <div className='bg-slate-200 p-5 rounded-md'>
        <div className="w-4/6">
          <p>{children}</p>
        </div>
        <div className="w-2/6">
          <button onClick={() => { editTodo(index) }}>
            <i className="fa-regular fa-pen-to-square p-4"></i>
          </button>
          <button onClick={() => { deleteTodos(index) }}>
            <i className="fa-regular fa-trash-can p-4"></i>
          </button>
        </div>
      </div>
    </article>
  )
}
