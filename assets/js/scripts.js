var tableVeille = [];
var delayInMilliseconds = 5000; //5 second


getAllVeille();

$(document).ready(function(){
    setTimeout(function() {
    //your code to be executed after 2 second
        
        setVeilleInCard(); 
        $("#loading").hide();
        $("html").css("cursor","default");

        setTimeout(function(){
            createPagination();
        }, 500);
        

    }, delayInMilliseconds);
})







