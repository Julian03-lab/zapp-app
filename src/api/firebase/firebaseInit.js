import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDUj5plL_y-4T9LGzPDPkUE9LndWuXkB0k',
  authDomain: 'zap-app-194e3.firebaseapp.com',
  projectId: 'zap-app-194e3',
  storageBucket: 'zap-app-194e3.appspot.com',
  messagingSenderId: '360297247571',
  appId: '1:360297247571:web:c2b8fe9af76c258df667a6'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
