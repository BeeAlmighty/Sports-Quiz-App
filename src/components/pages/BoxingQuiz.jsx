import React from 'react';
import { boxingQuestions } from '../boxingQuestions'
import { Quiz } from './Quiz';
export const BoxingQuiz = () => {
  return (
    <>
      <Quiz 
        sports={boxingQuestions}
        sportHeader={'BOXING'}
        src={'src/assets/boxing.webp'}
        alt={'boxers image'}
        path='src/assets/boxing-4.avif'
        pathAlt={'boxers image'}
      />
    </>
  )
}