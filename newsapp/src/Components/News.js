import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  static defaultProps = {
    country : "us",
    pageSize : 5,
    category : "general"
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }
  capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
  constructor(props){
    super(props);
    console.log("Hello i am a constructor");
    this.state = {
      articles : [],
      loading : false,
      page : 1,
      totalResults : 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }
  async update(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedata = await data.json();
    this.props.setProgress(50);
    console.log(parsedata)
    this.setState({
      articles: parsedata.articles,
      totalResults : parsedata.totalResults,
      loading : false
    });
    this.props.setProgress(100);
  }
  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc3ec6505c274559babfc4e8cd769dfa&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true});
    // let data = await fetch(url);
    // let parsedata = await data.json();
    // console.log(parsedata)
    // this.setState({
    //   articles: parsedata.articles,
    //   totalResults : parsedata.totalResults,
    //   loading : false
    // });
    this.update();
  }

  // handlePrevClick = async ()=>{
  //   console.log("previous")
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc3ec6505c274559babfc4e8cd769dfa&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading : true});
  //   // let data = await fetch(url);
  //   // let parsedata = await data.json();
  //   // console.log(parsedata)
  //   // this.setState({
  //   //   page : this.state.page - 1,
  //   //   articles: parsedata.articles,
  //   //   loading : false
  //   // });
  //   this.setState({page : this.state.page - 1});
  //   this.update();
  // }
  // handleNextClick = async ()=>{
  //   console.log("Next");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc3ec6505c274559babfc4e8cd769dfa&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading : true})
  //   // let data = await fetch(url);
  //   // let parsedata = await data.json();
  //   // console.log(parsedata)
  //   // this.setState({
  //   //   page : this.state.page + 1,
  //   //   articles: parsedata.articles,
  //   //   loading : false
  //   // })
  //   this.setState({page : this.state.page + 1});
  //   this.update();
  // }
  fetchMoreData = async () => {
    this.setState({page : this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata)
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults : parsedata.totalResults
    });
  };

  render() {
    if (!this.state.articles) {
    return <Spinner />; // Or a fallback component
  }
    return (
      <>
      
        <h1 className="text-center" style={{margin : "35px"}}>NewsMonkey - Top headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container" >
        <div className="row">
          {this.state.articles.map((element)=>{
            return   <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl= {element.urlToImage?element.urlToImage:"https://www.reuters.com/resizer/v2/UBJMYYKJUROVZLCPLY7ID7J7NM.jpg?auth=269262d03373e366ebc7d3adcb2e16f545084a12e1ed7d50a1043d7fe21b2dae&height=1005&width=1920&quality=80&smart=true"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}
      
      </>
    )
  }
}

export default News