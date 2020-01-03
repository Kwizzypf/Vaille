function test(index)
{
    var cpt = index - 1;
    $(".modal-title").html(tableVeille[cpt][1]);
    $("#synthesis").html(tableVeille[cpt][2]);
    $("#comments").html(tableVeille[cpt][3]);
    $("#links").html(tableVeille[cpt][4]);

   
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
            var tab = [record.get("Id"), record.get("Subject"), record.get("Synthesis"), record.get("Comment"), record.get("Links")];
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

function setVeilleInCard()
{
    console.log(tableVeille.length)
    for( var i = 0; i < tableVeille.length; i++)
    {
        var tmp = cardVeille.replace("###titleVeille###", tableVeille[i][1]);
        tmp = tmp.replace("###numberVeille###", tableVeille[i][0]);
        $("#list").append(tmp);
    }
}