<h1>AZ_Scrape</h1>

The app is the web scraping application setup to scrape the data from Andrew Zimmern website. The scraping process is a process of grabbing the information from website using Cheerio scraping tool. 

After that data has been scraped it is stored in the Mongo database.  

The app also has the option to store additional notes (comments) for each article of data. The notes are associated with the specific article and are stored in the database. The notes can be edited and or removed from the article and database. 

<h2> The technology used for this </h2>

* Express
* Express-handlebars
* Mongoose
* Cheerio
* Axios
* Heroku

<h3>Instructions</h3>

The app is deployed at Heroku, and can be accessed with the link below. 

https://floating-shore-96773.herokuapp.com/

The app cab also be run locally on your machine. The package.jason file has all the necessary dependencies. 

Please run the "npm i" command in your CLI for all necessary installations. 

Once all the dependencies are installed the app can be run using node.js.