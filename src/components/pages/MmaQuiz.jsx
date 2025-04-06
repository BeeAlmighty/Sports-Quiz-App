import React from 'react';
import { mmaQuestions } from '../mmaQuestions'
import { Quiz } from './Quiz';
export const MmaQuiz = () => {
  return (
    <>
      <Quiz 
        sports={mmaQuestions}
        sportHeader={'UFC'}
        src={'src/assets/ufc2-art.jpeg'}
        alt={'fighters image'}
        path='src/assets/ufc-4.jpg'
        pathAlt={'fighters image'}
      />
    </>
  )
}