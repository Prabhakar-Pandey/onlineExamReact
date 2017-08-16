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
        this.resultArray = [];
    }
    componentWillMount(){
        let url = "https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json";
        Utils.getRequest(url,(data)=>{
            this.setdatatostate(data)
        });
    }
    setdatatostate(data){
        this.setState({data:data});
        this.setState({current:data[0]});
        this.setState({currentIndex:0});
    }
    changequestion(res){
        this.resultArray.push(res)
        let index = this.state.currentIndex;
        index = index + 1;
        if(this.state.data[index]){
            this.setState({currentIndex:index});
            this.setState({current:this.state.data[index]});
        }else{
            this.setState({showRes:true});
        }
        
    }

   
  render() {
      var screenToShow;
        if (!this.state.showRes) {
        screenToShow = <QuestionLayout question={this.state} changequestion={(res) => this.changequestion(res)}/>;
        } else {
        screenToShow = <ResulWindow result={this.resultArray} question={this.state} />;
        }
      return (
        <div>
            {screenToShow}
        </div>
        );
    
  }
}
//Initializing point of react application, passing configuration for application here
ReactDOM.render(<MainPageContainer config={{dataToShow:2,timeInMillisec:1000}} />,document.getElementById('mainContainer'))

