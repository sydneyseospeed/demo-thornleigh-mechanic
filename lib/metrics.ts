import { onCLS, onFCP, onFID, onLCP, onTTFB, onINP } from 'web-vitals'

function sendToAnalytics(metric: any) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]', metric)
  }
  
  // In production, you could send to your analytics service
  // Example: Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    })
  }
}

export function reportWebVitals() {
  onCLS(sendToAnalytics)
  onFCP(sendToAnalytics)
  onFID(sendToAnalytics)
  onLCP(sendToAnalytics)
  onTTFB(sendToAnalytics)
  onINP(sendToAnalytics)
}