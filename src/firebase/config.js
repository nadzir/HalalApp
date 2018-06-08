import firebase from 'react-native-firebase'
import { FIREBASE_DATABASE_URL } from 'react-native-dotenv'

const config = {
  databaseURL: FIREBASE_DATABASE_URL
}
firebase.initializeApp(config)

export default firebase
