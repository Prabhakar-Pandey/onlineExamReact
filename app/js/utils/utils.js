var Utils = {
    getRequest:function(url,callback){
        // method accepts url and a callback to make http get request
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                return callback(JSON.parse(this.responseText))
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}

export default Utils;