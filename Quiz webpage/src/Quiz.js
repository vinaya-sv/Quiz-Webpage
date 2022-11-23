import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
class Quiz extends Component {
  state = {
    questionList: [
      {
        question:
          "Which of the following command is used to create react-js-app ?",
        opt1: "npx create-react-app appname",
        opt2: "npm install create-react-app",
        opt3: "npx install create-react-app -g",
        opt4: "install - l create-react-app",
        answer: 1
      },
      {
        question:
          "In React.js which one of the following is used to create a class for Inheritance ?",
        opt1: "Create",
        opt2: "Extends",
        opt3: "Inherits",
        opt4: "Delete",
        answer: 2
      },
      {
        question:
          "What is the default port number in which the application run ?",
        opt1: "3000",
        opt2: "8080",
        opt3: "5000",
        opt4: "3030",
        answer: 1
      },
      {
        question:
          "Which of the following valid component return type of React ?",
        opt1: "2",
        opt2: "5",
        opt3: "1",
        opt4: "3",
        answer: 3
      },
      {
        question:
          "Which of the following is a way to handle data in React.js ?",
        opt1: "State & Props",
        opt2: "Services & Components",
        opt3: "State & Services",
        opt4: "State & Component",
        answer: 1
      },
      {
        question: "Which of the following is must for the API in React.js ?",
        opt1: "SetinitialComponent",
        opt2: "renderComponent",
        opt3: "render",
        opt4: "All of the above",
        answer: 2
      },
      {
        question: "Which of the following is true regarding Babel ?",
        opt1: "Compiler",
        opt2: "Transpiral",
        opt3: "Both of the above",
        opt4: "None of the above",
        answer: 3
      },
      {
        question:
          "In React.js, how we can pass the data from one component to another in React.js ?",
        opt1: "SetState",
        opt2: "Props",
        opt3: "Render with arguments",
        opt4: "PropTypes",
        answer: 2
      }
    ]
  };
  render() {
    return (
      <div>
        <div class="header">
          <h2>React Quiz</h2>
          <button
            class="submit"
            onClick={() => window.alert("Answer Submitted")}
          >
            Submit
          </button>
        </div>

        {this.state.questionList.map((q) => (
          <QuestionCard
            q={q.question}
            opt1={q.opt1}
            opt2={q.opt2}
            opt3={q.opt3}
            opt4={q.opt4}
            answer={q.answer}
          />
        ))}
      </div>
    );
  }
}
export default Quiz;
