// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCu3vzpyrpyknWTrSc4B3z07e48yNRiVeU',
  authDomain: 'etude-firebase.firebaseapp.com',
  projectId: 'etude-firebase',
  storageBucket: 'etude-firebase.appspot.com',
  messagingSenderId: '647533975871',
  appId: '1:647533975871:web:c0189b412cb78e5260db8a',
  measurementId: 'G-E1WVPF77RY',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const auth = getAuth(app)
