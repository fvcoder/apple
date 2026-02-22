import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DeviceState {
  activeDevice: "iphone" | "ipad";
}

export const useDevice = create<DeviceState>()(
  persist(
    (_) => ({
      activeDevice: "iphone",
    }),
    {
      name: "device-state",
    },
  ),
);
