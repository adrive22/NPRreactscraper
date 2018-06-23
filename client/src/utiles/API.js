import axios from "axios";

export default {
    //scrapes npr

    scrapeArticles: function(){
        return axios.get("/api/scrape");
    },

    
    getSaved: function(){
        return axios.get("/api/saved");
    },


    //deletes the article with a given id

    deleteArticle: function(id){
        return axios.delete("/api/saved/" + id);
    },

    //saves an article to the article collection in the NPRreact database
    saveArticle: function(article){
        return axios.post("/api/saved", article);
    }
};


