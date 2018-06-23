import React, {Component} from "react";
import Nav from "../../components/Nav/nav";
import Header from "../../components/header/header";
import API from "../../utiles/API";
import Container from "../../components/Container/Container";
//import ArticleResults from "../../components/ArticlesResults/articleResults";
//import Search from "../../components/Search/Search";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";


class NPRarticles extends Component{

 state={
     articles:[],
     title:"",
     date:""
 };
 
 componentDidMount = () => {
    API.scrapeArticles()
    .then(this.loadArticles())
    //.then(console.log("mwahahaha"))
      
     //this.loadArticles();
  
 }

 loadArticles = () => {
     API.getArticles()
     .then(res => console.log(res.data))
    // .then(res => this.setState({ articles: res.data}))

     .catch(err => console.log(err));
     
 };

 handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ 
        [name]: value
    })
    console.log(this.state);
 };

 handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.date) {
      API.getArticles({
        title: this.state.title,
        date: this.state.date,
        link: this.state.link
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  };
 

 render(){
     return(
         <Container>
            <Nav />
            <Header/>
            <form>
                <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"/>
                 <Input
                    value={this.state.date}
                    onChange={this.handleInputChange}
                    name="date"
                    placeholder="Date (required)"
                    />
                <FormBtn 
                    disabled={!(this.state.title && this.state.date)}
                    onClick={this.handleFormSubmit}
                />
            </form>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(articles => {
                  return (
                    <ListItem key={articles._id}>
                      <a href={"/article/id" + articles._id}>
                        <strong>
                          {articles.title} by {articles.author}
                        </strong>
                      </a>
                     
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

            
         </Container>
     )
 }
 }

 export default NPRarticles;