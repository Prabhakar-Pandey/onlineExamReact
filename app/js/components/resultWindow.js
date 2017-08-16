import React from 'react';
import ReactDOM from 'react-dom';

// component is responsible to show result to UI
class QuestionLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    
  render() {
      var indents = [];
    this.props.question.data.map((key, index)=>{
        console.log(this.props.question.data[index].text,this.props.question.data[index].options[this.props.result[index]],this.props.question.data[index].answer,"answer")
        indents.push(
        <div key={index}>
            <ul>
                <li>{this.props.question.data[index].text}</li>
                <li>{this.props.question.data[index].options[this.props.result[index]]}</li>
                <li className={this.props.question.data[index].answer==this.props.result[index] ? 'correct' : 'incorrect'} >{this.props.question.data[index].answer==this.props.result[index]?"correct":"incorrect"}</li>
            </ul>   
        </div> );    
    });
    return (
        <div className="result-window">
            <div className="header">Result</div>
            <ul>
                <li className="table-head">Question</li>
                <li className="table-head">Choosed Option</li>
                <li className="table-head">Answer</li>
            </ul> 
            {indents}
        </div>
    );
  }
}

export default QuestionLayout = QuestionLayout;