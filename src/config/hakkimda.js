import firebase from './config';

class Hakkimda {

    async getIsDeneyimiList() {
        const kisiselbilgilerDto = await firebase.db.collection('admin').doc('Hakkımda').get()
        return kisiselbilgilerDto.get('isDeneyimiList')
    }

    async getEgitimDeneyimiList() {
        const egitimDeneyimiDto = await firebase.db.collection('admin').doc('Hakkımda').get()
        return egitimDeneyimiDto.get('egitimDeneyimiList')
    }

}

export default new Hakkimda()   