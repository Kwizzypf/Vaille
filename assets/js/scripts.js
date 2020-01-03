var tableVeille = [];
var delayInMilliseconds = 2000; //1 second


getAllVeille();
$(document).ready(function(){
    

    setTimeout(function() {
    //your code to be executed after 1 second
        setVeilleInCard();
    }, delayInMilliseconds);
})







