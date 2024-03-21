import React, { Component } from 'react'
import './subscribeStyle.css';

export class SubscribeForm extends Component {
  render() {
    return (
      <div>
            <div className="container subscribe my-5">
            <h2 className="subscribe__title">Let's keep in touch</h2>
            <p className="subscribe__copy">Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!</p>
            <div className="form">
                <input type="email" class="form__email" placeholder="Enter your email address" />
                <button className="form__button mx-3">Send</button>
            </div>
            <div className="notice">
                <input type="checkbox"/>
                <span className="notice__copy"> I agree to my email address being stored and uses to recieve monthly newsletter.</span>
            </div>
        </div>
      </div>
    )
  }
}

export default SubscribeForm