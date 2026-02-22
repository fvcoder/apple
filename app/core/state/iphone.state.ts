import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { DynamicIslandAnatomyKeys } from "~/device/iphone/dynamicIsland";

interface IPhoneState {
  statusBarTheme: "light" | "dark";
  statusBarDynamicIslandMode: DynamicIslandAnatomyKeys;
  statusBarSetDynamicIslandMode: (mode: DynamicIslandAnatomyKeys) => void;
}

export const useIPhoneStore = create<IPhoneState>()(
  persist(
    (set) => ({
      statusBarTheme: "light",
      statusBarDynamicIslandMode: "default",
      statusBarSetDynamicIslandMode: (mode) => set({ statusBarDynamicIslandMode: mode }),
    }),
    {
      name: "iphone-state",
    },
  ),
);
