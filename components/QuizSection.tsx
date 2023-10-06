'use client'
import React, { useState } from 'react';
import './QuizSection.css'; // Import the CSS file

const QuizSection: React.FC = () => {
  const [questions] = useState([
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-section">
      {showResult ? (
        <div className="quiz-result">
          <h2>Quiz Result</h2>
          <p>Your Score: {score} out of {questions.length}</p>
        </div>
      ) : (
        <div className="quiz-question">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{questions[currentQuestionIndex].question}</p>
          <div className="quiz-options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                {`Option ${String.fromCharCode(65 + index)}: ${option}`}
              </label>
            ))}
          </div>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
