import fb from './init'

export function getLoggedUser() {
    return fb.auth.currentUser;
}

export async function updateProfile(uid, data) {
    let profiles = fb.firestore.collection('profiles')
    if (uid) {
        profiles.doc(uid).get().then(doc => {
            if (!doc.exists) {
                profiles.doc(uid).set(data)
            } else {
                profiles.doc(uid).update(data)
            }
        });
    }
    return true;
}

export async function getProfile() {
    let profiles = fb.firestore.collection('profiles')
    let uid = fb.auth.currentUser.uid;
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