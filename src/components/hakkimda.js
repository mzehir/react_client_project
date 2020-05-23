// import React, { Component } from 'react'
import React, { useEffect, useState } from 'react';
import firebase from '../config/hakkimda';

const Hakkimda = () => {
    const [isDeneyimiList, setisDeneyimiList] = useState([])
    const [egitimDeneyimiList, setegitimDeneyimiList] = useState([])


    useEffect(() => {
        firebase.getIsDeneyimiList().then(((data) => {
            if (data) {
                setisDeneyimiList(data)
            }
        }))
    }, [])


    useEffect(() => {
        firebase.getEgitimDeneyimiList().then(((data) => {
            if (data) {
                setegitimDeneyimiList(data)
            }
        }))
    }, [])

    return (
        <section className="section" id="resume">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 text-right exp-content fadeIn">
                        <h3 className="title line f_right"><span>DENEYİMLERİM</span></h3>
                        <div className="clr" />

                        <ul className="my-experience">
                            {isDeneyimiList.length > 0 && isDeneyimiList.map((isDeneyimi, index) => {
                                return (
                                    <li>
                                        <div className="exp-header" data-toggle="collapse" data-target={"#exp1" + index}>
                                            <h4 className="exp-title"><i className="fa fa-briefcase" /> {isDeneyimi.calisilanSirket} <span className="clicker" /></h4>
                                        </div>
                                        <div id={"exp1" + index} className="collapse in exp-content">
                                            <div className="exp-lt-content col-md-4">
                                                <h6 className="exp-subtitle">Pozisyon: <span>{isDeneyimi.calisilanUnvan}</span></h6>
                                                <h6 className="exp-subtitle">Süre: <span>{isDeneyimi.calisilanZaman}</span></h6>
                                            </div>
                                            <div className="exp-rt-content col-md-8">
                                                <p>{isDeneyimi.calisilanSirketTecrube}</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>

                    </div>

                    <div className="col-md-6 text-left edu-content fadeIn">
                        <h3 className="title line f_left"><span>EĞİTİM GEÇMİŞİM</span></h3>
                        <div className="clr" />
                        <ul className="my-experience">
                            {egitimDeneyimiList.length > 0 && egitimDeneyimiList.map((egitimDeneyimi, index) => {
                                return (
                                    <li>
                                        <div className="exp-header" data-toggle="collapse" data-target={"#exp2" + index}>
                                            <h4 className="exp-title"><i className="fa fa-book" /> {egitimDeneyimi.mezunOlunanOkul} <span className="clicker" /></h4>
                                        </div>
                                        <div id={"exp2" + index} className="collapse in exp-content">
                                            <div className="exp-lt-content col-md-4">
                                                <h6 className="exp-subtitle">Bölüm: <span>{egitimDeneyimi.mezunOlunanBolum}</span></h6>
                                                <h6 className="exp-subtitle">Süre: <span>{egitimDeneyimi.mezunOlunanYil}</span></h6>
                                            </div>
                                            <div className="exp-rt-content col-md-8">
                                                <p>{egitimDeneyimi.mezunOlunanOkulAnisi}</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default Hakkimda;
