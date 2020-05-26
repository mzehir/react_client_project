import firebase from './config';
import axios from 'axios'

class İletisim {

    async getIletisimList() {
        const iletisimBilgileriDto = await firebase.db.collection('admin').doc('İletişim').get()
        return iletisimBilgileriDto.get('İletişim Bilgileri')
    }

    async sendMail(gelen) {
        let data = gelen;
        debugger
       let gelenData= await axios.post('/api/form', {
           data
        })
        debugger
        if (gelenData.data.mesaj===200) {
            alert(data.konu + " " + "Konulu Mesajınız Gönderilmiştir.")
        }
    }

}

export default new İletisim()