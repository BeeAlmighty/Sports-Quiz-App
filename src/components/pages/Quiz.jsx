import React, { useReducer, useState } from 'react';
import { Result } from '../Result';
const ACTIONS = {
  COMMENCE: 'commence',
  CHOOSE_ANSWER: 'choose',
  NEXT: 'next',
  DISPLAY_RESULT: 'display',
  CORRECT_ANSWER: 'correct answer'
}
const classes = {
  option1: '',
  option2: '',
  option3: '',
  option4: ''
}

const myReducer = (state, action) => {
  switch(action.type){
    case ACTIONS.COMMENCE: {
      return {...state, start: true}
    }
    case ACTIONS.CHOOSE_ANSWER: {
      return {...state, score: action.payload}
    }
    case ACTIONS.NEXT: {
      return {...state, index: action.payload, message: ''}
    }
    case ACTIONS.DISPLAY_RESULT: {
      return {...state, result: true}
    }
    case ACTIONS.CORRECT_ANSWER: {
      return {...state, message: true}
    }
  }
}
const initialState = {
  index: 0,
  result: false,
  score: 0,
  start: false,
  message: ''
}
export const Quiz = ({sports, sportHeader, src, alt, path, pathAlt}) => {
  const [bgClass, setBgClass] = useState(classes);
  const [state, dispatch] = useReducer(myReducer, initialState);
  const [isLocked, setIsLocked] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const handleAnswerClick = (e) => {
    setIsEnabled(true)
    if(isLocked === false){
      setIsLocked(true)
      let updatedClass = {option1: '', option2: '', option3: '', option4: ''}
      if(e.target.textContent === sports[state.index].answer){
        dispatch({ type: ACTIONS.CHOOSE_ANSWER, payload: state.score + 1})
        updatedClass[e.target.name] = 'bg-green-500 text-white focus:bg-green-500';
      } else {
        dispatch({ type: ACTIONS.CORRECT_ANSWER})
        updatedClass[e.target.name] = 'bg-red-100 border-2 border-red-500 text-black focus:bg-red-100';
      }
      setBgClass(updatedClass);
    }
    console.log(state.score)
  };
  const handleStartClick = () => {
    dispatch({ type: ACTIONS.COMMENCE })
  }
  const handleNextClick = () => {
    setIsEnabled(false)
    setIsLocked(false)
    if(isEnabled){
      if(state.index < sports.length - 1){
        dispatch({ type: ACTIONS.NEXT, payload: state.index + 1 })
        let updatedClass = {option1: '', option2: '', option3: '', option4: ''}
        setBgClass(updatedClass)
      } else {
        dispatch({ type: ACTIONS.DISPLAY_RESULT })
      }
    }
  }
  const percent = Math.round((state.score / sports.length) * 100);
  return (
    <>
      <h1 className='text-white p-[1rem] min-[1000px]:p-[3rem] text-center'>{sportHeader} QUIZ</h1>
      
      {state.start ? (
        <main className='font-Aboreto bg-[#F5EEDC] rounded-xl flex flex-col items-center gap-[1rem] max-w-[35rem] min-[700px]:p-[3rem] min-[1000px]:max-w-[50rem]'>
        {!state.result ? (
          <div className='grid gap-[1rem] min-[1000px]:gap-[4rem] pb-[5rem]  min-[1000px]:grid-cols-2  '>
            <div className='flex flex-col bg-black rounded-md p-[1rem] gap-[1rem] items-center'>
              <h2 className='text-[2rem] text-[#F5EEDC]'>
                QUESTION {state.index + 1} / 
                <span className='text-[1rem]'> {sports.length}</span>
              </h2>
              <p className='text-[#F5EEDC] text-[1.5rem] text-center'>
                {sports[state.index].questionText}
              </p>
            </div>
            <div className='flex flex-col gap-[1rem] bg-black rounded-lg text-[#F5EEDC] p-[1rem] pb-[2rem]'>
              <button name={'option1'} onClick={handleAnswerClick} className={bgClass.option1 + 'bg-white cursor-pointer px-[2rem] py-[0.5rem] rounded-md text-center text-black'}>{sports[state.index].options.optionOne}</button>
              <button name={'option2'} onClick={handleAnswerClick} className={bgClass.option2 + 'bg-white cursor-pointer px-[2rem] py-[0.5rem] rounded-md text-center text-black'}>{sports[state.index].options.optionTwo}</button>
              <button name={'option3'} onClick={handleAnswerClick} className={bgClass.option3 + 'bg-white cursor-pointer px-[2rem] py-[0.5rem] rounded-md text-center text-black'}>{sports[state.index].options.optionThree}</button>
              <button name={'option4'} onClick={handleAnswerClick} className={bgClass.option4 + 'bg-white cursor-pointer px-[2rem] py-[0.5rem] rounded-md text-center text-black'}>{sports[state.index].options.optionFour}</button>
            </div>
            {state.message && <p className='m-auto text-green-600 font-extrabold'>Correct: {sports[state.index].answer}</p>}
            <button className={`text-white w-[6rem] py-[0.5rem] rounded-md  m-auto 5 duration-300 ${isEnabled ? 'bg-black/80 hover:bg-black/6 cursor-pointer' : 'bg-black/15 cursor-not-allowed'}`} onClick={handleNextClick}>Next</button>
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
