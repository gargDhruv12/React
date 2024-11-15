import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div>
        <div className="card" style={{width : "18rem"}}>
            <img src="https://ichef.bbci.co.uk/news/1024/branded_news/4a9c/live/2a913580-9ff8-11ef-8538-e1655f5a8342.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
