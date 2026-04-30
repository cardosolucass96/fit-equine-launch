/// <reference types="vite/client" />

interface Window {
  fbq?: (action: string, eventName: string, payload?: Record<string, unknown>) => void;
  dataLayer?: Array<Record<string, unknown>>;
}
