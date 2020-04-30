import firebase from './init';



export function addData(data) {
    console.log(firebase);
    data['userId'] = firebase.auth.currentUser.uid;

    firebase.firestore.collection('entries').add(data)
        .then(docRef => console.log('data added', docRef.id))
        .catch(error => console.log(error))
}

export function realTimeListener(callback) {
    firebase.firestore.collection('entries').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type == 'added') {
                callback(change.doc.data())
            }
        })
    })
}


