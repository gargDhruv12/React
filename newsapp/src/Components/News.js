import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  // articles = [
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Remembrance Sunday: 'Traitors' poster put up at Michelle O'Neill's office",
  //       "description": "O'Neill was the first senior Sinn Féin figure to take part in an official Remembrance Sunday ceremony.",
  //       "url": "https://www.bbc.co.uk/news/articles/cjr40ypzyl7o",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2494/live/bf5c3e80-a00c-11ef-a040-d74242d1f59e.jpg",
  //       "publishedAt": "2024-11-11T11:37:22.8589164Z",
  //       "content": "O'Neill had received some criticism before attending the event.\r\nIn a letter published in the Irish News, more than 100 relatives of victims of the Troubles from the republican community in County Ty… [+1031 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Archbishop of Canterbury faces pressure to resign over Church abuse scandal",
  //       "description": "Justin Welby has \"lost the confidence of his Clergy\" and should step down, a vicar says.",
  //       "url": "https://www.bbc.co.uk/news/articles/c5yx90q0v31o",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/b50e/live/60c79f60-a014-11ef-a040-d74242d1f59e.jpg",
  //       "publishedAt": "2024-11-11T11:07:20.6251128Z",
  //       "content": "Mr Welby acknowledged he should have more rigorously followed up the details and said last week he had considered resigning, but decided to stay in his role.\r\nThe Makin review , externalinto Smyth's … [+2249 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Daniel Khalife changes plea to guilty on prison escape charge",
  //       "description": "He remains on trial at Woolwich Crown Court on three other charges.",
  //       "url": "https://www.bbc.co.uk/news/articles/c5ypdg5v5vvo",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9960/live/b2781c50-a018-11ef-8ab9-9192db313061.jpg",
  //       "publishedAt": "2024-11-11T11:07:16.2980632Z",
  //       "content": "Former British Army soldier Daniel Khalife has pleaded guilty to escaping from Wandsworth Prison last year.\r\nHe had originally pleaded not guilty to the charge, and is in the middle of giving evidenc… [+170 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "'I was moderating hundreds of horrific and traumatising videos'",
  //       "description": "The BBC speaks to social media moderators, whose job it is to find and remove distressing and illegal content.",
  //       "url": "https://www.bbc.co.uk/news/articles/crr9q2jz7y0o",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ff7c/live/2f460750-9c50-11ef-93ac-57886715ae8d.jpg",
  //       "publishedAt": "2024-11-11T10:37:23.2193329Z",
  //       "content": "They are based around the world. The people I spoke to while making our series The Moderators for Radio 4 and BBC Sounds, were largely living in East Africa, and all had since left the industry.\r\nThe… [+1100 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Ukraine, trade and Trump on agenda as Keir Starmer makes Paris trip",
  //       "description": "The pair are likely to discuss Donald Trump's US election win when they meet for Armistice Day events in Paris.",
  //       "url": "https://www.bbc.co.uk/news/articles/ce8dz0n8xldo",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4a9c/live/2a913580-9ff8-11ef-8538-e1655f5a8342.jpg",
  //       "publishedAt": "2024-11-11T08:07:20.4686806Z",
  //       "content": "Sir Keir - who is believed to be the first British leader to attend the ceremony on the Champs Elysee since Winston Churchill in 1944 - will also meet French Prime Minister Michel Barnier.\r\nQuestions… [+2231 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "House vote hangs in balance as Trump appoints border tsar",
  //       "description": "Since winning the US presidential election, all eyes have been on Donald Trump to see who he appoints to his administration.",
  //       "url": "https://www.bbc.co.uk/news/articles/c079m9mxx1no",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7828/live/9e8cccd0-9ffb-11ef-9172-c310204274ff.jpg",
  //       "publishedAt": "2024-11-11T07:37:18.6245479Z",
  //       "content": "The US government is made up of three branches: the Senate, the White House - both of which Trump and his party have already won - and the House of Representatives.\r\nRepublicans are expected to hold … [+2296 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Catfish killer used my photo as bait for others – victim",
  //       "description": "Three victims have spoken to the BBC after one of the world’s most prolific online sex offenders was jailed.",
  //       "url": "https://www.bbc.co.uk/news/articles/c7897plqy3zo",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8977/live/1dba3dd0-9e03-11ef-9260-19e6a950e830.jpg",
  //       "publishedAt": "2024-11-11T06:52:25.9529104Z",
  //       "content": "McCartney pleaded guilty to a litany of child sex offences and the manslaughter of 12-year-old Cimarron Thomas, who took her own life minutes after an online chat with him in 2018.\r\nMore than 3,500 v… [+547 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Energy smart meter issues creating north-south divide",
  //       "description": "Technology differences mean meters in northern England and Scotland may not work properly, energy firm body admits.",
  //       "url": "https://www.bbc.co.uk/news/articles/cq52382zd1no",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14ba/live/c0b792b0-9df1-11ef-9260-19e6a950e830.jpg",
  //       "publishedAt": "2024-11-11T06:37:15.8907334Z",
  //       "content": "The original roll-out of smart meters is a textbook example of a project failure, Sir Dieter Helm, a former government advisor on energy policy, told Panorama.\r\nHe believes the Coalition government m… [+1892 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "Jamie Oliver: Children's book cut over First Nations portrayal",
  //       "description": "The 400-page fantasy novel is accused of stereotyping Indigenous Australians.",
  //       "url": "https://www.bbc.co.uk/news/articles/cg4l3yz76neo",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/25e9/live/28620d30-9fbb-11ef-9130-5d1985777464.jpg",
  //       "publishedAt": "2024-11-11T02:07:16.9997902Z",
  //       "content": "\"It was never my intention to misinterpret this deeply painful issue,\" he said in a statement.\r\nThe book's publisher, Penguin Random House UK, said Oliver had requested Indigenous Australians be cons… [+1521 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "bbc-news",
  //         "name": "BBC News"
  //       },
  //       "author": "BBC News",
  //       "title": "MTV EMA 2024: Rita Ora pays emotional tribute to Liam Payne",
  //       "description": "The singer and ceremony host remembers the One Direction star as \"one of the kindest people I knew\".",
  //       "url": "https://www.bbc.co.uk/news/articles/cn4vwegppd2o",
  //       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/78bf/live/d26a5860-9fb0-11ef-82c3-45a801b7330b.jpg",
  //       "publishedAt": "2024-11-10T22:52:19.4218716Z",
  //       "content": "Sunday's ceremony was the first time the event has been held in the UK since 2017, and the third time Ora has acted as host.\r\nTowards the end of the show, she switched from her high-energy persona to… [+818 chars]"
  //     }
  //   ]
  constructor(){
    super();
    console.log("Hello i am a constructor");
    this.state = {
      articles : [],
      loading : false,
      page : 1
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=cc3ec6505c274559babfc4e8cd769dfa&page=1&pageSize=20`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata)
    this.setState({
      articles: parsedata.articles,
      totalResults : parsedata.totalResults
    });
  }

  handlePrevClick = async ()=>{
    console.log("previous")
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=cc3ec6505c274559babfc4e8cd769dfa&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata)
    this.setState({
      page : this.state.page - 1,
      articles: parsedata.articles
    })
  }
  handleNextClick = async ()=>{
    console.log("Next");
    if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=cc3ec6505c274559babfc4e8cd769dfa&page=${this.state.page+1}&pageSize=20`;
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(parsedata)
      this.setState({
        page : this.state.page + 1,
        articles: parsedata.articles
      })
    }
  }
  render() {
    return (
      <div className="container my-3" >
        <h1>NewsMonkey - Top headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return   <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl= {element.urlToImage?element.urlToImage:"https://www.reuters.com/resizer/v2/UBJMYYKJUROVZLCPLY7ID7J7NM.jpg?auth=269262d03373e366ebc7d3adcb2e16f545084a12e1ed7d50a1043d7fe21b2dae&height=1005&width=1920&quality=80&smart=true"} newsUrl={element.url}/>
            </div>
          })}
        </div>
          <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default News
