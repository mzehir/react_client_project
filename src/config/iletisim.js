import firebase from './config';
class İletisim {

    async getIletisimList() {
        const iletisimBilgileriDto = await firebase.db.collection('admin').doc('İletişim').get()
        return iletisimBilgileriDto.get('İletişim Bilgileri')
    }

    async getMail() {
        const mailDto = await firebase.db.collection('admin').doc('Gelen Mailler').get()
        return mailDto.get('İleti Var')
    }

    async sendMail(gelen) {
        let mailDto = await this.getMail()
        if (!mailDto) {
            let mail = [];
            mail.push(gelen)
            return firebase.db.collection('admin').doc('Gelen Mailler').set({
                "İleti Var": mail
            })
        }
        else {
            let mail = [];
            mailDto.push(gelen)
            for (let i = 0; i < mailDto.length; i++) {
                mail.push(mailDto[i])
            }
            return firebase.db.collection(`admin`).doc("Gelen Mailler").update({
                "İleti Var": mail
            })
        }
    }

}

export default new İletisim()