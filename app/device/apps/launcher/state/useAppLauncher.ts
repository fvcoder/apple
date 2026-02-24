import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AppLauncherState {
  homePage: number;
  homePageCount: number;
  setHomePage: (page: number) => void;
  setHomePageCount: (page: number) => void;
}

export const useAppLauncher = create(
  persist<AppLauncherState>(
    (set) => ({
      homePage: 1,
      homePageCount: 0,
      setHomePage: (page) => set({ homePage: page }),
      setHomePageCount: (page) => set({ homePageCount: page }),
    }),
    { name: "app-launcher" },
  ),
);
