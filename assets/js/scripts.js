//      _____  ____   ____   _____   ___  ______    _____  ____   ____      ___  __    ____   ___               ___   _  _   
//     |_____ |      |____)    |    |___)   |       |__   |    | |____)      |   | \ | |   ) |_    \ /     |__|  |   | \/ | |
//     _____| |____  |   \   __|__  |       |       |     |____| |   \      _|__ |  \| |_ /  |___  / \  [] |  |  |   |    | |___

var tableVeille = []; // tableau qui va stocké toute mes veilles 
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








