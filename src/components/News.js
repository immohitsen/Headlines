import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'sports'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    // console.log("Hey bud, I'm a constructor from News Component.");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = "Headlines - " + this.capitalizeFirstLetter(this.props.category);
  }

  async updateNews() {
    const { country, category, pageSize } = this.props;
    const { page } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=2bb5174e3287434dbdcb9e312ade0da1&page=${page}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = () => {
    // console.log("Previous button clicked");
    this.setState({ page: this.state.page - 1 }, () => {
      this.updateNews();
    });
  }

  handleNextClick = () => {
    // console.log("Next button clicked");
    this.setState({ page: this.state.page + 1 }, () => {
      this.updateNews();
    });
  }

  render() {
    const { loading, articles, totalResults, page } = this.state;
    const { pageSize } = this.props;
    return (
      <div className="container my-3">
        <h2 className="text-center my-5">Headlines - Top {this.capitalizeFirstLetter(this.props.category)} stories</h2>
        <hr className="text-center my-3" />
        <div className="container d-flex justify-content-between my-3">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={(page * pageSize) >= totalResults} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        {loading && <Spinner />}
        <div className="row my-3">
          {articles.map((element) => (
            <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 100) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;