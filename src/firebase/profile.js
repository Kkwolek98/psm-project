import fb from './init'

export function getLoggedUser() {
    return fb.auth.currentUser;
}

export function updateProfile(uid, data) {
    let profiles = fb.firestore.collection('profiles')
    if (uid) {
        return profiles.doc(uid).get().then(doc => {
            if (!doc.exists) {
                return profiles.doc(uid).set(data);
            } else {
                return profiles.doc(uid).update(data);
            }
        });
    }
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