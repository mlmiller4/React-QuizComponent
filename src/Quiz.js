import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {quiz_position: 1};
  }

  showNextQuestion() {
    this.state.quiz_position += 1;
  }

  handleResetClick() {
    this.state.quiz_position = 1;
  }

  render() {
    const isQuizEnd = this.state.quiz_position-1 === quizData.quiz_questions.length ? true : false;    
    
    return (
      <div>
        { isQuizEnd ? 
          <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} /> : 
          <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}>
            {quizData.quiz_questions[0].instruction_text}
          </QuizQuestion>
        }
      </div>
    );  
  }
}

export default Quiz;
