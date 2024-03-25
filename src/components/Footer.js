import React, { Component } from 'react'
import './footerStyle.css';


export class Footer extends Component {
  render() {
    return (
      <div>
                <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Headlines <i>Top Stories on the web </i> is your reliable source for timely and unbiased news coverage. We strive to deliver accurate and insightful reporting on global events, politics, technology, entertainment, and more. Our dedicated team of journalists is committed to keeping you informed and empowered with the latest happenings around the world.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
                <li className="nav-item"><a className="nav-link" href="#">Business</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Entertainment</a></li>
                <li className="nav-item"><a className="nav-link" href="#">General</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Health</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Science</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Sports</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Technology</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/">About Us</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by <a href="/Headlines">Headlines</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="/"><i class="bi bi-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="bi bi-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="bi bi-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="bi bi-linkedin"></i></a></li> 
              <li></li>  
            </ul>
          </div>
        </div>
      </div>
      
</footer>
      </div>
    )
  }
}

export default Footer