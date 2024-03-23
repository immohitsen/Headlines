import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card my-3 ">
          <img
            src={
              !imageUrl
                ? "https://www.livemint.com/lm-img/img/2024/01/20/1600x900/SKOREA-APPLE-STORE-23_1702439552788_1705731912281.jpg"
                : imageUrl
            }
            className="card-img-top"
            style={{ height: "12rem" }}
            alt="..."
          />
          <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: '0',
              }}
            >
              <span class="badge rounded-pill bg-danger"> {source} </span>
            </div>
          <div className="card-body" style={{ height: "20rem" }}>
            

            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small class="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toDateString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
