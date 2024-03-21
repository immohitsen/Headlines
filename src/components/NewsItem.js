import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
        <div className="card my-3 ">
            <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2024/01/20/1600x900/SKOREA-APPLE-STORE-23_1702439552788_1705731912281.jpg":imageUrl} className="card-img-top"  style={{height: '12rem'}}alt="..."/>
                <div className="card-body"  style={{height: '20rem'}}>
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>
                    {source}
                </span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small class="text-body-secondary">By {author?author:"Unknown"} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark" >Read More</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem