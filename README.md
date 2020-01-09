![logo](public/assets/images/WebScraper.png)
# Web Scraper

The app is the web scraping application setup to scrape the data from Andrew Zimmern website. The scraping process is a process of grabbing the information from a website using Cheerio.JS scraping tool. 

After that data has been scraped it is displayed in the app and is stored in the Mongo database. 

The user then has the ability to save articles for future reading or delete the article. 

For the saved articles, the user has an option to store notes (comments) for an article of his choosing. The notes are then associated with the specific article and are stored in the database. The notes can be edited and or removed from the article and database. 


## Getting Started
1. Clone the repository 
<pre>git clone git@github.com:jjeskovs/Bamazon.git</pre>

2. Install Node.js
3. Install all the dependency by running: 
<pre>npm install</pre>


4. Running the app locally: 
<pre>node server.js</pre>

5. The app is deployed at Heroku, and can be accessed with the link below. 

<pre>https://floating-shore-96773.herokuapp.com/</pre>


## The technology used for this

* Express
* Express-handlebars
* Mongoose
* Cheerio
* Axios
* Heroku