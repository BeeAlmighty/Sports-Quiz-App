import React from 'react';
import { mmaQuestions } from '../mmaQuestions'
import { Quiz } from './Quiz';
export const MmaQuiz = () => {
  return (
    <>
      <Quiz 
        sports={mmaQuestions}
        sportHeader={'UFC'}
        src={'https://i.pinimg.com/originals/43/b2/57/43b25707289ff4b11634598aa736ea6a.jpg'}
        alt={'fighters image'}
        path='https://i.ytimg.com/vi/dPe1uFE47kI/maxresdefault.jpg'
        pathAlt={'fighters image'}
      />
    </>
  )
}