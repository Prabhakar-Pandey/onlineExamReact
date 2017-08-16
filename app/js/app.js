import React from 'react';
import ReactDOM from 'react-dom';
import Utils from './utils/utils';
import QuestionLayout from './components/questionLayout'
class MainPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current:{},
            data:[],
            resultInput:[]
        };
    }
    componentWillMount(){
        let url = "https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json";
        Utils.getRequest(url,(data)=>{
            console.log(data,data[0],"data render")
            this.setState({data:data});
            this.setState({current:data[0]})
        });
    }

   
  render() {
      return (
        <div>
            <QuestionLayout questions={this.state} />
        </div>
        );
    
  }
}
//Initializing point of react application, passing configuration for application here
ReactDOM.render(<MainPageContainer config={{dataToShow:2,timeInMillisec:1000}} />,document.getElementById('mainContainer'))

