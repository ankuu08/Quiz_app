import React from 'react'

function Result({ questions, userans, reset = () => { } }) {
  const arr = userans.filter((ans) => ans === true);
  return (
    <>
      <div className='text-white p-16 border-2 border-white h-3/4'>
        <h1 className='text-6xl font-bold m-3 flex items-center justify-center'>Quiz Result</h1>
        <h2 className='text-xl'>You answered {arr.length} correct out of {questions.length} questions
          <button className='text-green-500 font-bold ml-1' onClick={() => {
            reset();
          }}>Reset Quiz</button>
        </h2>
        <div className='w-full flex items-center justify-center mt-'>
          <ul>
            {questions.map((options) => {
              return <li className={`${userans[options.id] ? 'text-green-400' : 'text-red-400'}`} key={options.id}>Q{options.id}. {options.question}</li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Result
