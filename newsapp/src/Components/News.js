import React, { useEffect , useState } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News = (props) =>{
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)
  
  const capitalizeFirstLetter = (val) =>{
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  const update = async ()=>{
  props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  setLoading(true)
  let data = await fetch(url);
  props.setProgress(30);
  let parsedata = await data.json();
  props.setProgress(50);
  console.log(parsedata)
  setArticles(parsedata.articles)
  setTotalResults(parsedata.totalResults)
  setLoading(false)
  props.setProgress(100);
  }
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata)
    setArticles(articles.concat(parsedata.articles))
    setTotalResults(parsedata.totalResults)
  };

    if (!articles) {
    return <Spinner />; // Or a fallback component
  }
    return (
      <>
      
        <h1 className="text-center" style={{margin : "35px",marginTop : "90px"}}>NewsMonkey - Top headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
        >
          <div className="container" >
        <div className="row">
          {articles.map((element)=>{
            return   <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl= {element.urlToImage?element.urlToImage:"https://www.reuters.com/resizer/v2/UBJMYYKJUROVZLCPLY7ID7J7NM.jpg?auth=269262d03373e366ebc7d3adcb2e16f545084a12e1ed7d50a1043d7fe21b2dae&height=1005&width=1920&quality=80&smart=true"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
}
News.defaultProps = {
  country : "us",
  pageSize : 5,
  category : "general"
}
News.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
}
export default News