import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "sports",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    // console.log("Hey bud, I'm a constructor from News Component.");
    this.state = {
      results: [],
      loading: true,
      nextPage: 1,
      totalResults: 0,
    };
    document.title =
      "Headlines - " + this.capitalizeFirstLetter(this.props.category);
  }

  async updateNews() {
    this.props.setProgress(10);
    const { country, category, pageSize } = this.props;
    const { nextPage } = this.state;
    const url = `https://newsdata.io/api/1/news?apikey=pub_40494253780e1ac05dfce0a7f5b5639555e77&country=${country}&language=en&category=${category}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({
      results: parsedData.results,
      totalResults: parsedData.totalResults,
      nextPage: parsedData.nextPage,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  // handlePrevClick = () => {
  //   // console.log("Previous button clicked");
  //   this.setState({ page: this.state.page - 1 }, () => {
  //     this.updateNews();
  //   });
  // };

  // handleNextClick = () => {
  //   // console.log("Next button clicked");
  //   this.setState({ page: this.state.page + 1 }, () => {
  //     this.updateNews();
  //   });
  // };

  fetchMoreData = async () => {
    const { country, category, pageSize } = this.props;
    const { nextPage } = this.state;
    const url = `https://newsdata.io/api/1/news?apikey=pub_40494253780e1ac05dfce0a7f5b5639555e77&country=${country}&language=en&category=${category}&page=${nextPage}`;
    this.setState({
      page: this.state.page + 1,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      results: this.state.results.concat(parsedData.results),
      totalResults: parsedData.totalResults,
      nextPage: parsedData.nextPage
    });
  };

  render() {
    const { loading, results, nextPage, totalResults, page } = this.state;
    const { pageSize } = this.props;
    return (
      <>
        <h2 className="text-center my-5">
          Headlines - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          stories
        </h2>
        <hr className="text-center my-3" />
        {/* <div className="container d-flex justify-content-between my-3">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page * pageSize >= totalResults}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.results.length}
          next={this.fetchMoreData}
          hasMore={this.state.results.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-3">
              {results.map((element) => (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 100) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.image_url}
                    newsUrl={element.link}
                    author={element.creator}
                    date={element.pubDate}
                    source={element.source_id}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
