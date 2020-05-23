import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loading from './components/loading';
import Yonlendirici from './components/yonlendirici';
import Anasayfa from './components/anasayfa';
import Tecrubelerim from './components/tecrubelerim';
import Hakkimda from './components/hakkimda';
import Portfolyo from './components/portfolyo';
import Ispaketlerim from './components/ispaketlerim';
import Testimonial from './components/testimonial';
import Blog from './components/blog';
import Iletisim from './components/iletisim';


function App() {
  return (
    <div className="App">
      <Loading></Loading>
      <Router>
        {/* Fixed navbar */}
        <Yonlendirici></Yonlendirici>

        <Switch>
          <div className="main-content">
            <Route exact path="/">
              {/* Anasayfa Buradan Başlıyor */}
              <Anasayfa></Anasayfa>
            </Route>


            <Route path="/tecrubelerim">
              {/* ======== Service Section ======== */}
              <Tecrubelerim></Tecrubelerim>
            </Route>


            <Route path="/hakkimda">
              {/* ======== Experience Section ======== */}
              <Hakkimda></Hakkimda>
            </Route>


            <Route path="/portfolyo">
              {/* ======== Portfolio Section ======== */}
              <Portfolyo></Portfolyo>
            </Route>


            <Route path="/ispaketlerim">
              {/*======== Price Section ======== */}
              <Ispaketlerim></Ispaketlerim>
            </Route>


            <Route path="/testimonial">
              {/* ======== Testimonial Section ======== */}
              <Testimonial></Testimonial>
            </Route>


            <Route path="/blog">
              {/* ======== Blog Section ======== */}
              <Blog></Blog>
            </Route>


            <Route path="/iletisim">
              {/* ======== Contact Section ======== */}
              <Iletisim></Iletisim>
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
