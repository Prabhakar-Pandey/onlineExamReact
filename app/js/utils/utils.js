import Data from '../data/data';
var Utils = {
    getRequest:function(url,callback){
        url = "https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log('hi',this.readyState,this.status,this)
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText,"response obj");
                return callback("true")
            }
        };
        xhttp.open("GET", url, true);
        //xhttp.setRequestHeader('Content-Type', 'application/json')
        xhttp.send();
    },
    readFromTextFile:function(callback){
        return callback(Data)
    }
}

export default Utils;