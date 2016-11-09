import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCgrSVhzWVflA8wwhK2UnxM60-zXwRjrN8",
  authDomain: "firsttest208179.firebaseapp.com",
  databaseURL: "https://firsttest208179.firebaseio.com",
  storageBucket: "firsttest208179.appspot.com",
  messagingSenderId: "494287199133"
};

export const app = firebase.initializeApp(config);
export const database = app.database();
