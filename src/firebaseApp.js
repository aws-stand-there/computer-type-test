import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBWPKLv9Z_4F1_dprCpB1o5pToZyqpnRU4",
    authDomain: "mytype-ec022.firebaseapp.com",
    databaseURL: "https://mytype-ec022.firebaseio.com",
    projectId: "mytype-ec022",
    storageBucket: "mytype-ec022.appspot.com",
    messagingSenderId: "553778596431",
    appId: "1:553778596431:web:a55e3d24aadf9a6478383a",
    measurementId: "G-F409CTYG7V"
};

const app = firebase.initializeApp(firebaseConfig);
export default app;
