// Firebase
import { config } from 'firebase-functions'
import { initializeApp } from 'firebase-admin'
initializeApp(config().firebase)

// API
export { api } from './api'