'use client'
import React from 'react'

function Questions({ question, onanswer }) {
  return (
    <>
      <div className='text-white p-16 border-2 border-white h-3/4'>
        <h1 className='text-6xl font-bold m-3 flex items-center justify-center'>World Quiz</h1>
        <h2 className='text-3xl m-3'>Q{question.id}. {question.question}</h2>
        <ul className='grid grid-cols-2'>
          {question.answerOptions.map((options) => {
            return <li className='w-full' key={options.text}>
              <button className='bg-gray-500 w-3/4 m-3 h-3/4 hover:bg-gray-400 cursor-pointer' onClick={() => {
                onanswer(options.isCorrect);
              }}>{options.text}</button>
            </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default Questions;
