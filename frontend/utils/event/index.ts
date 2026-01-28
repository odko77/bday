import { GlobalDialogProps } from "@/types/global";

type Listener = (...args: any[]) => void;

// Event бүрийн payload-ын төрлийг тодорхойлно
interface EventMap {
  "my-modal": GlobalDialogProps;
  "my-snackbar": { text: string; duration?: number };
}

class EventEmitter<T extends Record<string, any>> {
  private events: {
    [K in keyof T]?: Array<(payload: T[K]) => void>;
  } = {};

  on<K extends keyof T>(event: K, listener: (payload: T[K]) => void): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event]!.push(listener);
  }

  off<K extends keyof T>(event: K, listener: (payload: T[K]) => void): void {
    if (!this.events[event]) return;
    this.events[event] = this.events[event]!.filter((l) => l !== listener);
  }

  emit<K extends keyof T>(event: K, payload: T[K]): void {
    if (!this.events[event]) return;
    this.events[event]!.forEach((listener) => listener(payload));
  }
}

// Create an instance
const eventEmitter = new EventEmitter<EventMap>();
export default eventEmitter;

export const EVENT_NAMES = {
  MODAL: "my-modal",
  SNACKBAR: "my-snackbar",
} as const;

export type EventName = (typeof EVENT_NAMES)[keyof typeof EVENT_NAMES];
