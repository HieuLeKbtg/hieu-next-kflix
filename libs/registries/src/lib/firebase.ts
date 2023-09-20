import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import { configEnv } from '../utils'

const config = {
    apiKey: configEnv.FIREBASE_API_KEY,
    authDomain: configEnv.FIREBASE_AUTH_DOMAIN,
    projectId: configEnv.FIREBASE_PROJECT_ID,
    storageBucket: configEnv.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: configEnv.FIREBASE_MESSAGING_SENDER_ID,
    appId: configEnv.FIREBASE_APP_ID,
    measurementId: configEnv.FIREBASE_MEASUREMENT_ID
}

const app = getApps().length ? getApp() : initializeApp(config)
const auth = getAuth()

export { app, auth }
