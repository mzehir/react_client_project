import React, { useEffect, useState } from 'react';
import firebase from '../config/tecrubelerim';

const Tecrubelerim = () => {
    const [detayliYetkinlikList, setdetayliYetkinlikList] = useState([])

    useEffect(() => {
        firebase.getDetayliYetkinlik().then(((data) => {
            if (data) {
                setdetayliYetkinlikList(data)
            }
        }))
    }, [])

    return (
        <section className="section" id="service">
            <div className="container">
                <div className="row">
                    <div className="services text-center">
                        <h3 className="title line"><span>YETKİNLİKLERİM</span></h3>
                        <div className="clr" />

                        {detayliYetkinlikList.length > 0 && detayliYetkinlikList.map((detayliYetenek) => {
                            return (
                                <div className="col-md-4 col-sm-6 col-xs-12 service-box">
                                    <div className="service-item fadeLeft">
                                        <a href="#" className="service-icon"><i className={detayliYetenek.yetkinAlanFotograf} /></a>
                                        <h4>{detayliYetenek.yetkinAlanİsmi}</h4>
                                        <div className="service-content">
                                            <p>{detayliYetenek.yetkinAlanBilgisi}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
    )

}

export default Tecrubelerim;
