import axios from "axios";

export default {
    //gets all articles

    scrapeArticles: function(){
        return axios.get("/api/scrape");
    },

    getArticles: function(){
        return axios.get("/api/article");
    },

    //gets articles with given id

    getArticlesById: function(id){
        return axios.get("api/article/" + id);
    },

    //deletes the article with a given id

    deleteArticle: function(id){
        return axios.delete("/api/article/" + id);
    },

    //saves an article to the article collection in the NPRreact database
    saveArticle: function(article){
        return axios.post("/api/article", article);
    }
};


