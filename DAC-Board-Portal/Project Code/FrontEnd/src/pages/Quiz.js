import React, { useState, useEffect } from 'react';
import './Quiz.css';
import './as.css';
// import '../background.css';

import Start from '../Component/QuizD/Start';
import Question from '../Component/QuizD/Question';
import End from '../Component/QuizD/End';
import Modal from '../Component/QuizD/Modal';
import quizData from '../data/quiz.json';


let interval;

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);//popup window
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  return (
   
    <div className="container-fluid justify-content-center mt-6">
   
    <div className="App">
   
     
      
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}

      {showModal && <Modal
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizData.data}
      />}
      </div>
    </div>
  
 
  );
}

export default Quiz;