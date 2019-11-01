

$("#scrapeMe").on("click", function(event){
     // doing VOODOO magic 
    event.preventDefault();
    // alert("Scraping the website");

    $.ajax({
        method: "GET",
        url: "/scrape"
    })
    
    location.reload();    
})

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
    
})
    
$("#isSaved").on("click", function(event){
    // doing VOODOO magic again
    event.preventDefault();

    //sending user to the saved article page 
    $ajax({
        method: "GET",
        url: "/saved"
        
    })
})


