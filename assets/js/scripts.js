var tableVeille = [];
var delayInMilliseconds = 2000; //2 second


getAllVeille();

$(document).ready(function(){
    setTimeout(function() {
    //your code to be executed after 2 second
        
        setVeilleInCard(); 
        $("#loading").hide();
        $("html").css("cursor","default");

        setTimeout(function(){
            var items = $("#list .items");
            var numItems = items.length;
            var perPage = 3;

            items.slice(perPage).hide();

            $('#pagination-container').pagination({
                items: numItems,
                itemsOnPage: perPage,
                prevText: "&laquo;",
                nextText: "&raquo;",
                onPageClick: function (pageNumber) {
                    var showFrom = perPage * (pageNumber - 1);
                    var showTo = showFrom + perPage;
                    items.hide().slice(showFrom, showTo).show();
                }
            });
                
        }, 500);
        

    }, delayInMilliseconds);
})







