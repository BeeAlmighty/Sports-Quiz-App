import React, { useState } from 'react'
import { questions } from './questions'
export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const randomQuestion = Math.floor(Math.random() * questions.length);
  console.log(randomQuestion)
  const handleAnswerClick = (answerOption) => {
    if(currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResult(true)
    }
    if(answerOption.isCorrect === true) {
      setScore(score + 1);
    }
  }
  const percent = (score / questions.length) * 100
  return (
    <main className='font-Aboreto bg-[#F5EEDC] rounded-xl flex flex-col items-center gap-[1rem] max-w-[35rem] min-[700px]:p-[3rem] min-[1000px]:max-w-[50rem]'>
      <h1 className=''>SPORTS QUIZ</h1>
      {!result ? (
        <div className='grid gap-[4rem] pb-[5rem]  min-[1000px]:grid-cols-2  '>
          <div className='flex flex-col bg-[#3B6790] rounded-md p-[1rem] gap-[1rem] items-center'>
            <h2 className='text-[2rem] text-[#F5EEDC]'>
              QUESTION {currentQuestion + 1} / 
              <span className='text-[1rem]'> {questions.length}</span>
            </h2>
            <p className='text-[#F5EEDC] text-[1.5rem] text-center'>
              {questions[currentQuestion].questionText}
            </p>
          </div>
        <div className='flex flex-col gap-[1rem] bg-[#C1D8C3] rounded-lg text-[#F5EEDC] p-[1rem] pb-[2rem]'>
          {questions[currentQuestion].answerOptions.map(answerOption => (
            <div className='option-card' key={answerOption.answerText} 
              onClick={() => handleAnswerClick(answerOption)}
            >
              {answerOption.answerText}
            </div>
          ))}
        </div>
        </div>
      ) : (
        <div className='p-[2rem] bg-[#A6CDC6] mb-[2rem] rounded-md flex flex-col gap-[2rem]'>
          <h2 className='text-[1.5rem]'>Result: </h2>
          <p className='text-amber-950 text-[1.9rem]'>You scored {percent}%</p>
        </div>
      )}
    </main>
  )
}
