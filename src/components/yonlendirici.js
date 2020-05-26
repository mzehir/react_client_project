// import React, { Component } from 'react'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../config/anasayfa';

const Yonlendirici = () => {
    const [sosyalMedyaHesapList, setsosyalMedyaHesapList] = useState([])

    useEffect(() => {
        firebase.getanaSayfa().then(((data) => {
            if (data) {
                setsosyalMedyaHesapList(data.sosyalmedyahesap)
            }
           
        }))
        var date = new Date()
        document.getElementById("date").innerHTML =(date.getUTCDate() + 0) + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
        
    }, [])

    return (
        <div>
            <nav id="mainnav" className="navbar navbar-default">
                {/*<span class="custom-close"></span>
		            	<span class="custom-show"></span>*/}
                <div className="navbody">
                    <ul className="nav nav-logo">
                        <li className="nav-logo-slot">
                            <a className="logo_img" href="/#">
                                {/* <img src="images/icon.png" className="img-fluid" /> */}
                                <span>MZ</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav">
                        <li className="tooltip">
                            <Link className="page-scroll" to="/#"><i className="fa fa-info" />
                                <span className="tooltiptext tooltip-right">Anasayfa</span>
                            </Link>
                        </li>

                        <li className="tooltip">
                            <a className="page-scroll" href="/tecrubelerim"><i className="fa fa-gear" />
                                <span className="tooltiptext tooltip-right">Yetkinliklerim</span>
                            </a>
                        </li>

                        <li className="tooltip">
                            <a className="page-scroll" href="/hakkimda"><i className="fa fa-briefcase" />
                                <span className="tooltiptext tooltip-right">Hakkımda</span>
                            </a>
                        </li>

                        <li className="tooltip">
                            <a className="page-scroll" href="/portfolyo"><i className="fa fa-photo" />
                                <span className="tooltiptext tooltip-right">Çalışmalarım</span>
                            </a>
                        </li>

                        <li className="tooltip">
                            <a className="page-scroll" href="/ispaketlerim"><i className="fa fa-dollar" />
                                <span className="tooltiptext tooltip-right">Freelancer Paketlerim</span>
                            </a>
                        </li>

                        <li className="tooltip">
                            <a className="page-scroll" href="/testimonial"><i className="fa fa-comment" />
                                <span className="tooltiptext tooltip-right">-</span>
                            </a>
                        </li>

                        <li className="tooltip">
                            <a className="page-scroll" href="/blog"><i className="fa fa-file" />
                                <span className="tooltiptext tooltip-right">Blog</span>
                            </a>
                        </li>

                        <li className="tooltip">
                            <a className="page-scroll" href="/iletisim"><i className="fa fa-envelope" />
                                <span className="tooltiptext tooltip-right">İletişim</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="top-nav">
                <div className="copy-text">
                    <p>
                        {sosyalMedyaHesapList.length > 0 && sosyalMedyaHesapList.map((sosyalMedyaHesap, index) => {
                            return (
                                <a href={sosyalMedyaHesap.sosyalMedya}><i className={sosyalMedyaHesap.sosyalMedyaIcon} /></a>
                            )
                        })}
                    </p>
                </div>
                {/* <ul className="top-logo">
                    <li className="top-logo-slot"><span>LOGO</span></li>
                </ul> */}
            </div>
            <div className="right-nav">
                <ul className="right-logo">
            <li className="right-logo-slot"><span id=""></span></li>
                </ul>
                <div className="copy-text">
                    <p><a href="#">Mümin ZEHİR Kişisel Website</a></p>
                </div>
            </div>
            <div className="bottom-nav">
                <ul className="bottom-logo">
                    <li className="bottom-logo-slot"><span id="date"></span></li>
                </ul>
                <div className="copy-text">
                    <p>Copyright © 2020. Her Hakkı Saklıdır.</p>
                </div>
            </div>
        </div>
    )

}

export default Yonlendirici;