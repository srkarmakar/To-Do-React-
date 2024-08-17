import React, { useState } from 'react'

export default function TextArea(props) {
  const { text, setText } = props;
  const { addTodos } = props;

  const changeEvent = (event) => {
    setText(event.target.value);
  }

  const emptyTextArea = () => {
    setText('')
  }


  return (
    <section className='w-100 p-5'>
      <article className='w-100'>
        <label htmlFor="message" className="block my-2 text-center text-gray-950 text-3xl font-bold">Your Tasks</label>
        <div className="w-100 text-center">
          <textarea id="message" rows="4" className="w-9/12 border-2 rounded-md border-gray-950 dark:placeholder-gray-600 text-center" placeholder="Write your thoughts here..." value={text} onChange={changeEvent}>
          </textarea>
        </div>
      </article>
      <article className='w-100 text-center'>
        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-600" value={text} disabled={!text} onClick={() => {
          addTodos(text);
          emptyTextArea()
        }}>Add Task</button>
      </article>
    </section>
  )
}
