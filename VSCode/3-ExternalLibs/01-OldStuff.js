var oldStuff = oldStuff || {};

oldStuff.getMessage = function() {
    var time = (new Date()).getHours();
    var message = "Good Day"
    
    if (time < 12) {
        message = "Good Morning"    
    } else if (time <18) {
        message = "Good Afternoon"
    } else {
        message = "Good Evening"
    }
    
    return message;
};
