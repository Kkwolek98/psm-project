import firebase from './init';



export function addData(carb, count, fats, kcal, name, proteins){
    console.log(firebase);
    
    firebase.firestore.collection('entries').add({
        carb: carb,
        count: count,
        date: new Date(),
        fats: fats,
        kcal: kcal,
        name: name,
        proteins: proteins,
        userID: firebase.auth.currentUser.uid
    })
    .then( docRef => console.log('data added', docRef.id))
    .catch(error => console.log(error))
}

export function realTimeListener(callback){
    firebase.firestore.collection('entries').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change =>{
            if(change.type == 'added'){
                callback(change.doc.data())
            }
        })
    })
}


