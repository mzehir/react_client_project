import firebase from './config';
import axios from 'axios'

class İletisim {

    async getIletisimList() {
        const iletisimBilgileriDto = await firebase.db.collection('admin').doc('İletişim').get()
        return iletisimBilgileriDto.get('İletişim Bilgileri')
    }

    async sendMail(gelen) {
        let data = gelen;
        await axios.post('/api/form', {
           data
        })
    }

}

export default new İletisim()