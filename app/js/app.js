import React from 'react';
import ReactDOM from 'react-dom';
import Utils from './utils/utils';

class MainPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }
    componentWillMount(){
        let url = "https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json"
        Utils.getRequest((data)=>{
            console.log(data,"data")
            this.allData=data.items;
        });
    }
   
  render() {
     
      return (
        <div>
            hello world
        </div>
        );
    
  }
}
//Initializing point of react application, passing configuration for application here
ReactDOM.render(<MainPageContainer config={{dataToShow:2,timeInMillisec:1000}} />,document.getElementById('mainContainer'))

