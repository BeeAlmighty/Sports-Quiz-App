import React from 'react';
import { boxingQuestions } from '../boxingQuestions'
import { Quiz } from './Quiz';
export const BoxingQuiz = () => {
  return (
    <>
      <Quiz 
        sports={boxingQuestions}
        sportHeader={'BOXING'}
        src={'https://www.spectator.co.uk/wp-content/uploads/2024/09/Toby-Getty_51b070.jpg'}
        alt={'boxers image'}
        path='https://mir-s3-cdn-cf.behance.net/project_modules/1400/179b3f157131633.637396fce47d4.png'
        pathAlt={'boxers image'}
      />
    </>
  )
}