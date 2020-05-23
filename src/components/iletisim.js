// import React, { Component } from 'react'
import React, { useEffect, useState } from 'react';
import firebase from '../config/iletisim';


const İletisim = () => {
    const [iletisimList, setiletisimList] = useState([])
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [konu, setkonu] = useState('')
    const [message, setmessage] = useState('')

    useEffect(() => {
        firebase.getIletisimList().then(((data) => {
            if (data) {
                setiletisimList(data)
            }
        }))
    }, [])


    return (
        <section className="section" id="contact">
            <div className="container">
                <div className="add-form text-center">
                    <h3 className="title line"><span>İLETİŞİM BİLGİLERİM</span></h3>
                    <div className="clr" />
                    <div className="row">
                        <div className="col-md-6 col-sm-6 gmap fadeIn">
                            <div className="contact-left">
                                <h3><strong>Adres Bilgilerim:</strong></h3>
                                <p>{iletisimList.adres}</p>
                                <h3><strong>Telefon Numaram:</strong></h3>
                                <p>{iletisimList.gsm}</p>
                                <h3><strong>Çalışma Zamanım:</strong></h3>
                                <p>Gün: Pazartesi - Cumartesi </p>
                                <p>Zaman: 09:00 - 17:30</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 con-form fadeIn">
                            <form onSubmit={e => e.preventDefault() && false} id="contactform" method="POST" className="c_form">
                                <input onChange={e => setname(e.target.value)} name="name" type="text" id="inputName" className="c_input" placeholder="İsim" />
                                <input onChange={e => setemail(e.target.value)} name="email" type="text" id="inputMail" className="c_input" placeholder="Email" />
                                <input onChange={e => setkonu(e.target.value)} name="konu" type="text" id="inputSubject" className="c_input" placeholder="Konu" />
                                <textarea onChange={e => setmessage(e.target.value)} name="message" id="inputMessage" className="c_textarea" placeholder="Mesaj" defaultValue={""} />
                                <button onClick={sendToMail} type="submit" id="submit-btn" className="c_button">Gönder <i className="fas fa-paper-plane" /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

    async function sendToMail() {
        try {
            var data = {
                name : name,
                email : email,
                konu : konu,
                message : message
            }
            debugger
            await firebase.sendMail(data)
        } catch (error) {
            alert(error.message)
        }
    }

}

export default İletisim;
