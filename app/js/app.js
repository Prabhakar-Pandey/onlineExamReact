import React from 'react';
import ReactDOM from 'react-dom';
import Utils from './utils/utils';
import QuestionLayout from './components/questionLayout';
import ResulWindow from './components/resultWindow';
class MainPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRes:false
        };
        // variable used for soring the user input results
        this.resultArray = [];
    }
    componentWillMount(){
        let url = "https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json";
        // created common Util functions which can be used by all components.
        // here we are using it for making http request to server
        Utils.getRequest(url,(data)=>{
            this.setdatatostate(data)
        });
    }
    setdatatostate(data){
        this.setState({data:data});// this is to store all the question coming from server
        this.setState({current:data[0]});//initially current will point to the 0th index of the array of question
        this.setState({currentIndex:0});
    }
    changequestion(res){
        //this method will accept the userinput and change the current question to next index
        this.resultArray.push(res)
        let index = this.state.currentIndex;
        index = index + 1;
        // check added if we dont have any more question then we will show user result window
        if(this.state.data[index]){
            this.setState({currentIndex:index});
            this.setState({current:this.state.data[index]});
        }else{
            this.setState({showRes:true});
        }
        
    }

   
  render() {
      var screenToShow;
      if(this.state.current){
          //showRes is used for showing result window in UI
        if (!this.state.showRes) {
            screenToShow = <QuestionLayout question={this.state} changequestion={(res) => this.changequestion(res)}/>;
        } else {
            screenToShow = <ResulWindow result={this.resultArray} question={this.state} />;
        }
      }else{
          screenToShow="Loading.."
      }
        
      return (
        <div>
            {screenToShow}
        </div>
        );
    
  }
}
//Initializing point of react application, passing configuration for application here
ReactDOM.render(<MainPageContainer />,document.getElementById('mainContainer'))

