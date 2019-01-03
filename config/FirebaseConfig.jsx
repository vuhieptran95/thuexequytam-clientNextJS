// import * as firebase from "firebase";
// import firebase from "firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";

var config = {
  apiKey: "AIzaSyBIG6hlZT8NYMQwQfAxVJ-VQ1VZkwm1cQk",
  authDomain: "thuexequytam-firebase.firebaseapp.com",
  databaseURL: "https://thuexequytam-firebase.firebaseio.com",
  projectId: "thuexequytam-firebase",
  messagingSenderId: "82777450298"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const Db = firebase.app().firestore();
Db.settings({ timestampsInSnapshots: true });

export default Db;
