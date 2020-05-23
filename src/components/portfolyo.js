import React, { Component } from 'react'

export default class Portfolyo extends Component {
    render() {
        return (
            <section className="section" id="portfolio">
                <div className="container">
                    <div className="folio-header text-center">
                        <h3 className="title line"><span>Çalışmalarım</span></h3>
                        <div className="clr" />
                        {/* <ul id="filters" className="clearfix">
                            <li><span className="filter active" data-filter="*">All</span></li>
                            <li><span className="filter" data-filter=".app">App</span></li>
                            <li><span className="filter" data-filter=".card">Card</span></li>
                            <li><span className="filter" data-filter=".logo">Logo</span></li>
                            <li><span className="filter" data-filter=".web">Web</span></li>
                        </ul> */}
                    </div>

                    <div className="row">
                        <h3 className="text-center">BU SAYFA BAKIMDA</h3>
                    </div>

                    {/* <div className="row">
                        <div id="portfoliolist">
                            <div className="col-md-4 portfolio logo" data-cat="logo">
                                <div className="portfolio-wrapper">
                                    <img src="images/portfolio/project-3.jpg" alt="" />
                                    <div className="label">
                                        <div className="label-text">
                                            <p className="text-title">Bird Document</p>
                                            <span className="text-category">Logo</span>
                                        </div>
                                    </div>
                                    <div className="extra">
                                        <a href="images/portfolio/project-3.jpg" data-fancybox="images" data-caption="Project Title"><i className="fa fa-plus" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 portfolio app" data-cat="app">
                                <div className="portfolio-wrapper">
                                    <img src="images/portfolio/project-4.jpg" alt="" />
                                    <div className="label">
                                        <div className="label-text">
                                            <p className="text-title">Bird Document</p>
                                            <span className="text-category">Logo</span>
                                        </div>
                                    </div>
                                    <div className="extra">
                                        <a href="images/portfolio/project-4.jpg" data-fancybox="images" data-caption="Project Title"><i className="fa fa-plus" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 portfolio web" data-cat="web">
                                <div className="portfolio-wrapper">
                                    <img src="images/portfolio/project-5.jpg" alt="" />
                                    <div className="label">
                                        <div className="label-text">
                                            <p className="text-title">Bird Document</p>
                                            <span className="text-category">Logo</span>
                                        </div>
                                    </div>
                                    <div className="extra">
                                        <a href="images/portfolio/project-5.jpg" data-fancybox="images" data-caption="Project Title"><i className="fa fa-plus" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 portfolio card" data-cat="card">
                                <div className="portfolio-wrapper">
                                    <img src="images/portfolio/project-6.jpg" alt="" />
                                    <div className="label">
                                        <div className="label-text">
                                            <p className="text-title">Bird Document</p>
                                            <span className="text-category">Logo</span>
                                        </div>
                                    </div>
                                    <div className="extra">
                                        <a href="images/portfolio/project-6.jpg" data-fancybox="images" data-caption="Project Title"><i className="fa fa-plus" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 portfolio app" data-cat="app">
                                <div className="portfolio-wrapper">
                                    <img src="images/portfolio/project-7.jpg" alt="" />
                                    <div className="label">
                                        <div className="label-text">
                                            <p className="text-title">Bird Document</p>
                                            <span className="text-category">Logo</span>
                                        </div>
                                    </div>
                                    <div className="extra">
                                        <a href="images/portfolio/project-7.jpg" data-fancybox="images" data-caption="Project Title"><i className="fa fa-plus" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 portfolio card" data-cat="card">
                                <div className="portfolio-wrapper">
                                    <img src="images/portfolio/project-8.jpg" alt="" />
                                    <div className="label">
                                        <div className="label-text">
                                            <p className="text-title">Bird Document</p>
                                            <span className="text-category">Logo</span>
                                        </div>
                                    </div>
                                    <div className="extra">
                                        <a href="images/portfolio/project-8.jpg" data-fancybox="images" data-caption="Project Title"><i className="fa fa-plus" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 portfolio card" data-cat="card">
                                <div className="portfolio-wrapper">
                                    <img src="images/portfolio/project-3.jpg" alt="" />
                                    <div className="label">
                                        <div className="label-text">
                                            <p className="text-title">Bird Document</p>
                                            <span className="text-category">Logo</span>
                                        </div>
                                    </div>
                                    <div className="extra">
                                        <a href="images/portfolio/project-3.jpg" data-fancybox="images" data-caption="Project Title"><i className="fa fa-plus" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 portfolio logo" data-cat="logo">
                                <div className="portfolio-wrapper">
                                    <img src="images/portfolio/project-4.jpg" alt="" />
                                    <div className="label">
                                        <div className="label-text">
                                            <p className="text-title">Bird Document</p>
                                            <span className="text-category">Logo</span>
                                        </div>
                                    </div>
                                    <div className="extra">
                                        <a href="images/portfolio/project-4.jpg" data-fancybox="images" data-caption="Project Title"><i className="fa fa-plus" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 portfolio app" data-cat="app">
                                <div className="portfolio-wrapper">
                                    <img src="images/portfolio/project-5.jpg" alt="" />
                                    <div className="label">
                                        <div className="label-text">
                                            <p className="text-title">Bird Document</p>
                                            <span className="text-category">Logo</span>
                                        </div>
                                    </div>
                                    <div className="extra">
                                        <a href="images/portfolio/project-5.jpg" data-fancybox="images" data-caption="Project Title"><i className="fa fa-plus" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </section>
        )
    }
}
