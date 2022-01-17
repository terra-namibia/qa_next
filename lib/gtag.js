export const GA_ID = process.env.NEXT_PUBLIC_GA_ID
export const existsGaId = GA_ID !== ''

// PVを測定
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (path) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

// GAイベントを発火
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value = ''}) => {
  if (!existsGaId) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}