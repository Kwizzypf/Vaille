/* function qui insère les données dans le modal */
function test(index)
{
    var cpt = index - 1;
    $(".modal-title").html(tableVeille[cpt][1]);
    $("#synthesis").html(tableVeille[cpt][2]);
    $("#comments").html(tableVeille[cpt][3]);
    var tabLinks = tableVeille[cpt][4].split("\n\n");
    /*fonction qui va créer plusieur balises a pour générer nos liens de source */
    var links = setLinkInABalise(tabLinks); 
    $("#links").html(links);
   
}

  /*fonction qui va créer plusieur balises a pour générer nos liens de source */
function setLinkInABalise(tab)
{
    var templateFinal = "";
    for(var i = 0; i < tab.length; i++)
    {
        if(tab[i] != "")
        {
            var tmp = lien.replace(/###lien###/gi, tab[i]);
            templateFinal += tmp;
        }
    }
    return templateFinal;
}

/* function qui récupère toutes les veilles sur AirTable et les stock dans un tableau */
function getAllVeille()
{

    base('Table 1').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 50,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            var tab = [record.get("Id"), record.get("Subject"), 
            record.get("Synthesis"), record.get("Comment"), record.get("Links"), record.get("Images")];
            tableVeille.push(tab);
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });

}

/* function qui remplis les cartes et les affiches*/
function setVeilleInCard()
{

    for( var i = 0; i < tableVeille.length; i++)
    {
        var imgUrl = tableVeille[i][5]
        var tmp = cardVeille.replace("###titleVeille###", tableVeille[i][1]);
        tmp = tmp.replace("###id###", tableVeille[i][0]);
        tmp = tmp.replace("###numberVeille###", tableVeille[i][0]);
        tmp = tmp.replace("###linkImage###", imgUrl[0].url);
        $("#list").append(tmp);
    }
}

function createPagination()
{
    var items = $("#list .items");
            var numItems = items.length;
            var perPage = 2;

            items.slice(perPage).hide();

            $('.pagination-container').pagination({
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
}