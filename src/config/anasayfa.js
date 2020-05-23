import firebase from './config';

class Anasayfa {

    async getanaSayfa() {
        const anasayfaBilgiler = await firebase.db.collection('admin').doc('AnaSayfa').get()

        var kisiselbilgiler = anasayfaBilgiler.get("KişiselBilgiler")
        var yetenek = anasayfaBilgiler.get("yetenek")
        var hakkimda = anasayfaBilgiler.get("Hakkımda")
        var sosyalmedyahesap = anasayfaBilgiler.get("sosyalMedyaHesap")

        var foto = await firebase.storage.ref('ProfilResmi').child(kisiselbilgiler.fotoName).getDownloadURL();
        var cv = await firebase.storage.ref('CV').child(kisiselbilgiler.cvBenimName).getDownloadURL();

        var data = {
            cv: cv,
            foto: foto,
            kisiselbilgiler: kisiselbilgiler,
            yetenek: yetenek,
            hakkimda: hakkimda,
            sosyalmedyahesap: sosyalmedyahesap,
        }
        return data
    }

}

export default new Anasayfa()