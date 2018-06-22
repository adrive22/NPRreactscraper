import React, {Component} from "react";
import Nav from "../../components/Nav/nav";
import Header from "../../components/header/header";
import API from "../../utiles/API";
import Container from "../../components/Container/Container";
import ArticleResults from "../../components/ArticlesResults/articleResults";
import Saved from "../../components/Saved/Saved";
import Search from "../../components/Search/Search";


class NPRarticles extends Component{

 state={
     articles:[]
 };
 
 componentDidMount(){
     this.loadArticles();

 }

 loadArticles = (data) => {
     API.getArticles()
     .then(res => console.log(res.data))
     //.then(res => this.setState({articles:res.data}))

     .catch(err => console.log(err));
     
 };

 

 render(){
     return(
         <Container>
            <Nav />
            <Header/>
            <Search />
            <ArticleResults/>
            <Saved />
         </Container>
     )
 }
 }

 export default NPRarticles;