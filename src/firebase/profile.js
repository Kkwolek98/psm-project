import fb from './init'

export function getLoggedUser() {
    return fb.auth.currentUser;
}

export function updateProfile(uid, data) {
    let profiles = fb.firestore.collection('profiles')
    if (uid) profiles.doc(uid).get().then(doc => {
        if (!doc.exists) {
            profiles.doc(uid).set(data);
        } else {
            profiles.doc(uid).update(data);
        }
    });
}

export async function getProfile(uid) {
    let profiles = fb.firestore.collection('profiles')
    let document;
    await profiles.doc(uid).get().then(doc => {
        if (!doc.exists) {
            //
        } else {
            document = doc.data();
        }
    });
    return document;
}