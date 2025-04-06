import React, { useState } from 'react';
import { Result } from '../Result';
export const Quiz = ({sports, sportHeader, src, alt, path, pathAlt}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0);
    const [start, setStart] = useState(false)
    const handleAnswerClick = (answerOption) => {
      if(currentQuestion < sports.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setResult(true)
      }
      if(answerOption.isCorrect === true) {
        setScore(score + 1);
      }
    };
    const handleStartClick = () => {
      setStart(true)
    }
    const percent = (score / sports.length) * 100
    return (
      <>
        <h1 className='text-white p-[3rem] text-center'>{sportHeader} QUIZ</h1>
       
        {start ? (
          <main className='font-Aboreto bg-[#F5EEDC] rounded-xl flex flex-col items-center gap-[1rem] max-w-[35rem] min-[700px]:p-[3rem] min-[1000px]:max-w-[50rem]'>
          {!result ? (
            <div className='grid gap-[4rem] pb-[5rem]  min-[1000px]:grid-cols-2  '>
              <div className='flex flex-col bg-black rounded-md p-[1rem] gap-[1rem] items-center'>
                <h2 className='text-[2rem] text-[#F5EEDC]'>
                  QUESTION {currentQuestion + 1} / 
                  <span className='text-[1rem]'> {sports.length}</span>
                </h2>
                <p className='text-[#F5EEDC] text-[1.5rem] text-center'>
                  {sports[currentQuestion].questionText}
                </p>
              </div>
            <div className='flex flex-col gap-[1rem] bg-black rounded-lg text-[#F5EEDC] p-[1rem] pb-[2rem]'>
              {sports[currentQuestion].answerOptions.map(answerOption => (
                <div className='option-card' key={answerOption.answerText} 
                  onClick={() => handleAnswerClick(answerOption)}
                >
                  {answerOption.answerText}
                </div>
              ))}
            </div>
            </div>
          ) : (
            <Result percent={percent} path={path} pathAlt={pathAlt}/>
          )}
          </main>
        ) : (
          <div className='flex flex-col items-center bg-[#FFF2DB] p-[1rem]'>
            <img src={src} alt={alt} className='w-[25rem]' />
            <button 
            className="option-card m-[2rem]"
            onClick={handleStartClick}>Start Quiz</button>
          </div>
        )}
      </>
    )
  }