import Data from '../data/data';
var Utils = {
    getRequest:function(url,callback){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(callback);
                return callback(JSON.parse(this.responseText))
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    },
    readFromTextFile:function(callback){
        return callback(Data)
    }
}

export default Utils;