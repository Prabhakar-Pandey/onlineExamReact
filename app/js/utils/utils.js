import Data from '../data/data';
var Utils = {
    getRequest:function(url,callback){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            console.log('hi',this.readyState,this.status,this)
            if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText,"response obj");
                return callback("true")
            }
        };
        xhttp.open("GET", url, true);
        xhttp.setRequestHeader('Content-Type', 'application/json')
        xhttp.send();
    },
    readFromTextFile:function(callback){
        return callback(Data)
    }
}

export default Utils;