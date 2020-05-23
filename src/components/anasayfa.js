import React, { useEffect, useState } from 'react';
import firebase from '../config/anasayfa';

const Anasayfa = () => {
    const [kisiselBilgilerList, setkisiselBilgilerList] = useState([])
    const [hakkimdaList, sethakkimdaList] = useState([])
    const [yetenekDalVeYuzdeList, setyetenekDalVeYuzdeList] = useState([])
    const [sosyalMedyaHesapList, setsosyalMedyaHesapList] = useState([])
    const [profilFoto, setprofilFoto] = useState([])

    const [cvBenim, setcvBenim] = useState([])

    useEffect(() => {
        firebase.getanaSayfa().then(((data) => {
            if (data) {
                setkisiselBilgilerList(data.kisiselbilgiler)
                setyetenekDalVeYuzdeList(data.yetenek)
                sethakkimdaList(data.hakkimda)
                setsosyalMedyaHesapList(data.sosyalmedyahesap)
                setprofilFoto(data.foto)

                setcvBenim(data.cv)
            }
        }))
    }, [])


    return (

        <section className="section" id="about">
            <div className="container">
                <div className="theme-header header-content">
                    <div className="row">
                        <div className="p_info col-md-4 col-xs-12 text-right">
                            <h3 className="title line f_right"><span>KİŞİSEL BİLGİLERİM</span></h3>
                            <div className="clr" />

                            <ul className="personal-info">
                                <li><span>Meslek:</span> {kisiselBilgilerList.Meslek} </li>
                                <li><span>E-mail:</span> {kisiselBilgilerList.email} </li>
                                {/* <li><span>E-mail:</span> asmith@domain.com </li> */}
                                <li><span>Telefon:</span> {kisiselBilgilerList.telefonNo} </li>
                                {/* <li><span href="tel:0541 952 59 20">Telefon:</span> {kisiselBilgilerList.telefonNo} </li> */}
                            </ul>

                            <ul className="head-social">
                                {sosyalMedyaHesapList.length > 0 && sosyalMedyaHesapList.map((sosyalMedyaHesap, index) => {
                                    return (
                                        <li><a href={sosyalMedyaHesap.sosyalMedya}><i className={sosyalMedyaHesap.sosyalMedyaIcon} /></a></li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="owner col-md-4 col-xs-12 text-center">
                            <img src={profilFoto} alt="Uploaded images" />
                            <h3 className="title">{kisiselBilgilerList.isimSoyİsim}</h3>
                            <div id="myCarousel-owner" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <h6>{kisiselBilgilerList.carouselMeslekBilgisi}</h6>
                                    </div>
                                    <div className="item">
                                        <h6>{kisiselBilgilerList.carouselMeslekBilgisi2}</h6>
                                    </div>
                                    <div className="item">
                                        <h6>{kisiselBilgilerList.carouselMeslekBilgisi3}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="downloaddiv">
                                <ul className="my-download">
                                    {/* <li><a href="images/resume.pdf" download>CV İndir <i className="fa fa-download" /></a></li> */}
                                    <li><a href={cvBenim} download>CV İndir <i className="fa fa-download" /></a></li>
                                    <li><a className="page-scroll" href="/iletisim"><i className="fa fa-envelope" /> İletişim</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-12 skills">
                            <h3 className="title line f_left"><span>YETKİNLİKLERİM</span></h3>
                            <div className="clr" />

                            <ul>
                                {yetenekDalVeYuzdeList.length > 0 && yetenekDalVeYuzdeList.map((yetenekDalVeYuzde, index) => {
                                    return (
                                        <li className="pro-bar-container">
                                            <div className="progress pro-bar" data-pro-bar-percent={yetenekDalVeYuzde.yetenekYuzdesi} style={{ "width": yetenekDalVeYuzde.yetenekYuzdesi + "%" }} >
                                                <span className="tag">{yetenekDalVeYuzde.yetenekDali}</span> <span className="percent">{yetenekDalVeYuzde.yetenekYuzdesi}%</span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="profile_desc_content text-center">
                    <div className="profile_desc_text">
                        <p>{hakkimdaList.onYazi}</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Anasayfa;
