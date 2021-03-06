const router = require("express").Router();
const articleRoutes = require("./articleroutes");
const request = require('request');
const cheerio = require('cheerio');
const db = require('../../models');

router.use("/saved", articleRoutes);

router.get("/scrape", function (req, res) {
    
 
    request("https://www.npr.org/sections/news/", function (error, response, html) {
        console.log(html);
        //set up cheerio request for the html into a variable
        var $ = cheerio.load(html);


        $(".title").each(function (i, element, props) {
            //save an empty result object 
            var result = {};

            //adding the text and href of every link and save them as properties of the result object
            result.title = $(this).children("a").text();
            result.link = $(this).children("a").attr("href");
            result.date = Date(Date.now());


            db.Article.find({link: result.link}).then(data => {
                console.log(data);
                if( data.length ){
                    console.log("no new articles");
                    
                }
                else {
                    if(props.title===result.title){
                        console.log("woooo");
                        db.Article.create(result)
                        .then(function (dbArticle) {
                            console.log(dbArticle);
                        })
                        .catch(function (err) {
                            return res.json(err);
                        });
                    }
                    
                }
            })
        });

    });
 })

module.exports = router;