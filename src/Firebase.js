import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

var firebaseConfig = {
    apiKey: "AIzaSyCkohB6Q5JV3a7OC0mdaKCxyYseucPxV_8",
    authDomain: "pecinta-senja.firebaseapp.com",
    databaseURL: "https://pecinta-senja.firebaseio.com",
    projectId: "pecinta-senja",
    storageBucket: "pecinta-senja.appspot.com",
    messagingSenderId: "650190291427",
    appId: "1:650190291427:web:c839f2ccd83fbdedb420d6"
};

firebase.initializeApp(firebaseConfig);
  
firebase.firestore().settings(settings);
  
export default firebase;