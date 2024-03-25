import React, { Component } from "react";
import PropTypes from 'prop-types'
import logo from './about.jpg'

export class About extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center my-3">About Headlines</h2>
        <section className="py-3 py-md-5 my-4">
          <div className="container">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
              <div className="col-12 col-lg-6 col-xl-5">
                <img
                  className="img-fluid rounded"
                  loading="lazy"
                  src={logo}
                  alt="About 1"
                />
              </div>
              <div className="col-12 col-lg-6 col-xl-7">
                <div className="row justify-content-xl-center">
                  <div className="col-12 col-xl-11">
                    {/* <h2 className="mb-3">Who Are We?</h2> */}
                    <p className="mb-5">
                      Hey, fellas I'm Mohit Sen. Back with a new ReactJs project.<br></br>
                      This time a news media website. Here, I used an API to fetch articles from the web and display at one place similar to google news feed. With an infinite scroll 
                      feature users can go through large number of stories depending upon the category they prefer. <br></br>
                    </p>
                    <p className="mb-5">
                    This may serve as another lesson in my learning journey. If you liked my effort and up for a project, hit those links below: <br></br>
                      Linkedin - <a target="_blank" href="https://www.linkedin.com/in/immohitsen/">https://www.linkedin.com/in/immohitsen/</a><br />
                      Github - <a target="_blank" href="https://github.com/immohitsen">https://github.com/immohitsen</a>
                    </p>
                    <div className="row gy-4 gy-md-0 gx-xxl-5X">
                      <div className="col-12 col-md-6">
                        <div className="d-flex">
                          <div className="me-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              fill="currentColor"
                              className="bi bi-gear-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                            </svg>
                          </div>
                          <div>
                            <h2 className="h4 mb-3">Connect</h2>
                            <p className="text-secondary mb-0">
                              Connect through linkedin or my insta right there. Well, its a rarity if you could reach here. If you did, gr8 job mate.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="d-flex">
                          <div className="me-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              fill="currentColor"
                              className="bi bi-fire"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                            </svg>
                          </div>
                          <div>
                            <h2 className="h4 mb-3">Insta</h2>
                            <p className="text-secondary mb-0">
                                Super active here, <br />
                              <a target="_blank" href="https://www.instagram.com/immohitsen/">https://www.instagram.com/immohitsen/</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default About;
