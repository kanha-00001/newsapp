import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: 'in',
    category: 'general'

  }
  
  
     articles =[1,2,3];
    constructor(){
        super();
        this.state = { 
            articles: this.articles,
            loading: false,
            page:1
        }
      };

 async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=4ca08c656d92463b92b2fedf54c461c5&page=1&pagesize=15`;
    let data = await fetch(url);
    
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles});
    

  }
   handleNextClick= async ()=>{
    console.log("next");
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=4ca08c656d92463b92b2fedf54c461c5&page=${this.state.page +1}&pagesize=15`;
    let data = await fetch(url);
    
    let parsedData = await data.json();
    console.log(parsedData);
    
    this.setState({
      page : this.state.page + 1    })
      this.setState({articles: parsedData.articles});
  };
  handlePrevClick= async ()=>{
    console.log("previous");
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=4ca08c656d92463b92b2fedf54c461c5&page=${this.state.page - 1}&pagesize=15`;
    let data = await fetch(url);
    
    let parsedData = await data.json();
    console.log(parsedData);
    
    this.setState({
      page : this.state.page - 1    })
      this.setState({articles: parsedData.articles});
  };
      
      

  render() {
    return (   
      <div className='container my-3'>
        <h2 className='text-center'>NewsWala - Top Headlines</h2>
        <div className='row my-3'>
        {this.state.articles.map(element =>{
                return  <div className='col-md-3 mx-3 ' key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description ={element.description?element.description.slice(0,90):""} imageurl ={element.urlToImage}  Newsurl = {element.url} author ={element.author?element.author:"not known"} date={element.publishedAt}/>
                </div>
            })};
           
        </div>
        <div className='container my-3 d-flex justify-content-between'>
        <button type="button" disabled={this.state.page===1} className="btn btn-dark mx-2" onClick={this.handlePrevClick}>&larr; Previous page</button>
        <button type="button" className="btn btn-dark mx-2" onClick={this.handleNextClick}>Next Page &rarr;</button>

        
        </div>
        
      </div>
    )
  }
}

export default News
