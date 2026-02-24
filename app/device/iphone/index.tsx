import { cn } from "tailwind-variants";

import { Launcher } from "../apps/launcher";

import { StatusBar } from "./statusBar";

import { useIPhoneStore } from "~/core/state/iphone.state";

export function IPhoneDevice({ children }: { children?: React.ReactNode }) {
  const statusBarTheme = useIPhoneStore((x) => x.statusBarTheme);

  return (
    <div
      className={cn("overflow-hidden rounded-[19%/9%] border-3 border-zinc-300", {
        dark: statusBarTheme !== "dark",
      })}
      style={{ width: 453 }}
    >
      <div className="overflow-hidden rounded-[18%/8.5%] border-14 border-black">
        <div className="@container relative aspect-9/19.5">
          <StatusBar />

          <Launcher />

          {children}
        </div>
      </div>
    </div>
  );
}
