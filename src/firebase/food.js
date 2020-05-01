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

export async function getMealsForDay(day) {
    day = new Date().setTime(day);
    let entries = fb.firestore.collection('entries');
    let uid = fb.auth.currentUser.uid;
    day = { min: new Date(day).setHours(0, 0, 1), max: new Date(day).setHours(23, 59, 59) }
    let todayList = entries.where("userId", "==", uid).where("time", ">=", day.min).where("time", "<=", day.max);
    let toReturn = [];
    await todayList.get().then(
        snapshot => {
            if (snapshot.empty) {
                console.log("No data for that day!");
            } else {
                snapshot.forEach(doc => {
                    toReturn.push(doc.data());
                })
            }
        }
    )
    return toReturn;

}

export async function getCaloriesForDay(day) {
    let entries = fb.firestore.collection('entries');
    let uid = fb.auth.currentUser.uid;
    day = { min: day.setHours(0, 0, 1), max: day.setHours(23, 59, 59) }
    let dayList = entries.where("userId", "==", uid).where("time", ">=", day.min).where("time", "<=", day.max);
    let caloriesTotal = 0;
    await dayList.get().then(
        snapshot => {
            if (snapshot.empty) {
                console.log("No data for that day!");
            } else {
                snapshot.forEach(doc => {
                    caloriesTotal += doc.data().calories;
                })
            }
        }
    )
    return caloriesTotal;
}