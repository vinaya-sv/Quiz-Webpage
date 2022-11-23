import React, { Component } from "react";
import "./QuestionCard.css";
function checkAnswer(inputans, actualans) {
  if (inputans === 0) return <>Answer</>;
  else if (inputans === actualans) {
    return <>Correct</>;
  } else return <>Wrong</>;
}

class QuestionCard extends Component {
  state = { ans: 0, clicked: 0 };

  shouldComponentUpdate() {
    if (this.state.clicked === 1) 
    return false;
    else 
    return true;
  }
  changeColor() {
    if (this.state.ans === this.props.answer) 
      return "#81b381";
    else if (this.state.ans !== this.props.answer && this.state.ans !== 0)
      return "#e26a6a";
  }
  render() {
    return (
      <div className="outer" style={{ backgroundColor: this.changeColor() }}>
        <h1 className="question">{this.props.q}</h1>
        <br />
        <div className="opt1" onClick={() => this.setState({ ans: 1, clicked: 1 })}>
          <p>{this.props.opt1}</p>
        </div>
        <div className="opt2" onClick={() => this.setState({ ans: 2, clicked: 1 })}>
          <p>{this.props.opt2}</p>
        </div>
        <div className="opt3" onClick={() => this.setState({ ans: 3, clicked: 1 })}>
          <p>{this.props.opt3}</p>
        </div>
        <div className="opt4" onClick={() => this.setState({ ans: 4, clicked: 1 })}>
          <p>{this.props.opt4}</p>
        </div>
        <div className="answer" id="answer">
          <p>{checkAnswer(this.state.ans, this.props.answer)}</p>
        </div>
      </div>
    );
  }
}
export default QuestionCard;
