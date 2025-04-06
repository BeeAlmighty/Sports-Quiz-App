import React from 'react';
import { footballQuestions } from '../footballQuestions';
import { Quiz } from './Quiz';
export const FootballQuiz = () => {
  return (
    <>
      <Quiz 
        sports={footballQuestions}
        sportHeader={'FOOTBALL'}
        src={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d948fc73883411.5c18d2b9b0369.jpg'}
        alt={'footballer image'}
        path='https://phantom-marca.uecdn.es/918002e4090a932e0627fcd0c3b58acf/resize/1200/f/webp/assets/multimedia/imagenes/2023/01/12/16735370253017.jpg'
        pathAlt={'Footballers image'}
      />
    </>
  )
}
