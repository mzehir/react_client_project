import firebase from './config';

class Tecrubelerim {

    async getDetayliYetkinlik() {
        const yetkinlikDto = await firebase.db.collection('admin').doc('Yetkinlik').get()
        return yetkinlikDto.get('yetkinlik')
    }

}

export default new Tecrubelerim()