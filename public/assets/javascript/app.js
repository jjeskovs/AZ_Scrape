

$("#scrapeMe").on("click", function(event){
     // doing VOODOO magic 
    event.preventDefault();
    // alert("Scraping the website");

    $.ajax({
        method: "GET",
        url: "/scrape"
    })
    
    location.reload();    
});

$(".saveBtn").on("click", function(event){
    // doing VOODOO magic 
    event.preventDefault();
    
    // grabbing the id from the clicked article. 
    const articleId = $(this).data("id");
    // console.log(articleId);

    // doing the call to the back end 
    $.ajax({
        method: "PUT",
        url: `/marksaved/${articleId}`

    })
    .then(function(data){
        console.log(data);
        location.reload();   
    })
    
});

$(".deleteBtn").on("click", function(event){
     // doing VOODOO magic 
     event.preventDefault();

     // grabbing the id from the clicked article. 
    const articleId = $(this).data("id");

    $.ajax({
        method: "DELETE",
        url: `/article/${articleId}`

    })
    .then(function(data){
        console.log(data)
        location.reload();
    })
});

$(".notesBtn").on("click", function(event){
    // doing VOODOO magic 
    event.preventDefault();
    


})
    



