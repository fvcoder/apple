import { Launcher } from "../apps/launcher";

import { StatusBar } from "./statusBar";

export function IPhoneDevice({ children }: { children?: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[19%/9%] border-3 border-zinc-300" style={{ width: 453 }}>
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
