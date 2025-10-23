export type AnalyticsEventName = "download_cv" | "contact_click" | "project_preview";

export type AnalyticsPayload = Record<string, unknown>;

export const trackEvent = async (
  name: AnalyticsEventName,
  payload: AnalyticsPayload = {},
) => {
  try {
    const body = JSON.stringify({
      name,
      payload,
      timestamp: new Date().toISOString(),
    });

    if (navigator?.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon("/api/events", blob);
      return;
    }

    await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
      keepalive: true,
    });
  } catch {
    // Silently fail to avoid affecting UX.
  }
};
