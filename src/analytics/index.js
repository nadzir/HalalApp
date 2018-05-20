import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge'

export const analytics = new GoogleAnalyticsTracker(process.env.GOOGLE_ANALYTICS_ID)
