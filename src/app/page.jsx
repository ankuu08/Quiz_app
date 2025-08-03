'use client';
import React, { useState } from 'react';
import questions from './utils/questions';
import Questions from './Components/Questions';
import Result from './Components/Result';
function Page() {
  const [currques, setcurrques] = useState(0);
  const [userans, setuserans] = useState([]);
  const onanswer = (isCorrect) => {
    const newarr = [...userans];
    newarr[currques] = isCorrect;
    setuserans(newarr);
    setcurrques(currques + 1);
  }
  const reset = () => {
    setcurrques(0);
    setuserans([]);
  }
  return (
    <div className="h-[100vh] bg-black w-full text-white flex justify-center p-6">
      {currques < questions.length && (<Questions question={questions[currques]} onanswer={onanswer}></Questions>)}
      {currques === questions.length && (<Result questions={questions} userans={userans} reset={reset}></Result>)}
    </div>
  );
}

export default Page;
