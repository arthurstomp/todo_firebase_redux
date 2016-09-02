import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyApoKXXv-4K3bYm0yaHVBaTCH_YvHmBKVE',
  authDomain: 'test-2d634.firebaseapp.com',
  databaseURL: 'https://test-2d634.firebaseio.com',
  storageBucket: 'test-2d634.appspot.com'
}

firebase.initializeApp(config)

export default firebase
