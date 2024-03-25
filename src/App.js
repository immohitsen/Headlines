import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import SubscribeForm from "./components/SubscribeForm";
import Footer from "./components/Footer";
import LoadingBar from "react-top-loading-bar";
import About from "./components/About";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 10
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/Headlines"
              element={
                <News setProgress={this.setProgress} 
                  key="general"
                  pageSize={12}
                  country="in"
                  category="top"
                />
              }
            />
             <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} 
                  key="business"
                  pageSize={12}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} 
                  key="entertainment"
                  pageSize={12}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress} 
                  key="health"
                  pageSize={12}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress} 
                  key="science"
                  pageSize={12}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress} 
                  key="sports"
                  pageSize={12}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} 
                  key="technology"
                  pageSize={12}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
          <SubscribeForm />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
