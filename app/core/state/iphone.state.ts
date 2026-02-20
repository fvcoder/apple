import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { LiveActivityMode } from "../device/iphone/liveActivities";

interface IPhoneState {
  statusBarTheme: "light" | "dark";
  statusBarLiveActivityMode: LiveActivityMode;
  statusBarSetLiveActivityMode: (mode: LiveActivityMode) => void;
}

export const useIPhoneStore = create<IPhoneState>()(
  persist(
    (set) => ({
      statusBarTheme: "light",
      statusBarLiveActivityMode: "compact",
      statusBarSetLiveActivityMode: (mode) => set({ statusBarLiveActivityMode: mode }),
    }),
    {
      name: "iphone-state",
    },
  ),
);
