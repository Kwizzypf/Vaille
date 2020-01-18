var tableVeille = [];
var delayInMilliseconds = 3000; //5 second


getAllVeille();

$(document).ready(function(){
    setTimeout(function() {
    //your code to be executed after 2 second
        
        setVeilleInCard(); 
        $("#loading").hide();
        $("html").css("cursor","default");
        createPagination();

        // setTimeout(function(){
        //     createPagination();
        // }, 1000);
        

    }, delayInMilliseconds);
})








