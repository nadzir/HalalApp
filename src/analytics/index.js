import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge'
import { GOOGLE_ANALYTICS_ID } from 'react-native-dotenv'

export const analytics = new GoogleAnalyticsTracker(GOOGLE_ANALYTICS_ID)
