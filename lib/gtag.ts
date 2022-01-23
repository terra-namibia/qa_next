export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const existsGaId = GA_ID !== "";

// PVを測定
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (path: string) => {
  window.gtag("config", GA_ID as string, {
    page_path: path,
  });
};

// GAイベントを発火
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value = 0 }: Event) => {
  if (!existsGaId) {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value: value,
  });
};

type Event = {
  action: string;
  category: string;
  label: string;
  value?: number;
};
