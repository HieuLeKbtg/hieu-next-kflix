import { configEnv } from '@libs/utils'
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const config = {
    apiKey: configEnv.FIREBASE_API_KEY,
    authDomain: configEnv.FIREBASE_AUTH_DOMAIN,
    projectId: configEnv.FIREBASE_PROJECT_ID,
    storageBucket: configEnv.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: configEnv.FIREBASE_MESSAGING_SENDER_ID,
    appId: configEnv.FIREBASE_APP_ID,
    measurementId: configEnv.FIREBASE_MEASUREMENT_ID,
    databaseURL: configEnv.FIREBASE_REALTIME_DB_URL
}

const app = getApps().length ? getApp() : initializeApp(config)
const auth = getAuth()
const db = getDatabase(app)

export { app, auth, db }
