import React from 'react';
import { footballQuestions } from '../footballQuestions';
import { Quiz } from './Quiz';
export const FootballQuiz = () => {
  return (
    <>
      <Quiz 
        sports={footballQuestions}
        sportHeader={'FOOTBALL'}
        src={'src/assets/football-3-art.jpg'}
        alt={'footballer image'}
        path='src/assets/football-4.webp'
        pathAlt={'Footballers image'}
      />
    </>
  )
}
