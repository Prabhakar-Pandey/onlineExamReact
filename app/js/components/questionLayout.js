import React from 'react';
import ReactDOM from 'react-dom';

//This component is responsible for rendering question to UI
class QuestionLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    return (
        <div className="board">
            <div className="question">{this.props.question.current.text}</div>
            <div className="options">
                <div>A-{this.props.question.current.options[0]}</div>
                <div>B-{this.props.question.current.options[1]}</div>
                <div>C-{this.props.question.current.options[2]}</div>
                <div>D-{this.props.question.current.options[3]}</div>
            </div>
            <div className="options">
                <span onClick={() => this.props.changequestion(0)} >A</span>
                <span onClick={() => this.props.changequestion(1)} >B</span>
                <span onClick={() => this.props.changequestion(2)} >C</span>
                <span onClick={() => this.props.changequestion(3)} >D</span>
            </div>
        </div>
    );
  }
}

export default QuestionLayout = QuestionLayout;