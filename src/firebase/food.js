import fb from './init'

export async function getMealsForToday() {
    let entries = fb.firestore.collection('entries');
    let uid = fb.auth.currentUser.uid;
    let today = { min: new Date().setHours(0, 0, 1), max: new Date().setHours(23, 59, 59) }
    let todayList = entries.where("userId", "==", uid).where("time", ">=", today.min).where("time", "<=", today.max);
    let toReturn = [];
    await todayList.get().then(
        snapshot => {
            if (snapshot.empty) {
                console.log("No data for today!");
            } else {
                snapshot.forEach(doc => {
                    toReturn.push(doc.data());
                })
            }
        }
    )
    return toReturn;

}