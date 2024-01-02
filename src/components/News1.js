import React, { Component } from 'react';



export class News1 extends Component {
    articles =[];
    constructor(){
        super();
        console.log("helllo this is a constructor")
        this.state = {
            articles: this.articles,
            loading: false
        }
      };
    
async componentDidMount(){
    console.log("vdc")
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=4ca08c656d92463b92b2fedf54c461c5"
    let data =await fetch(url);
    let parsedData = await data.json
    this.setState({articles: parsedData.articles})
}
      
          

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsWala - Top Headlines</h2>
        <div className='row'>
          {this.state.articles.forEach((elememt)=> {
            console.log("element")
          })}


            
        </div>
         
        </div>
        
      
    )
  }
}

export default News1
