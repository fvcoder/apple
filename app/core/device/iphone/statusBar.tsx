import { animate } from "animejs";
import { useEffect, useRef } from "react";
import { cn } from "tailwind-variants";

import { LiveActivities } from "./liveActivities";

import { Clock } from "~/core/components/clock";
import { SfBattery100percent } from "~/core/icons/sfBattery100percent";
import { SfCellularbars } from "~/core/icons/sfCellularbars";
import { SfWifi } from "~/core/icons/sfWifi";
import { useIPhoneStore } from "~/core/state/iphone.state";

export function StatusBar() {
  const theme = useIPhoneStore((x) => x.statusBarTheme);
  const liveActivityMode = useIPhoneStore((x) => x.statusBarLiveActivityMode);
  const sfCellularbarsRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (sfCellularbarsRef.current !== null) {
      if (liveActivityMode === "compact") {
        animate(sfCellularbarsRef.current, {
          clipPath: ["inset(0 0 0 100%)", "inset(0 0 0 0%)"],
          easing: "spring(1, 80, 13, 0)",
          duration: 600,
        });
      } else {
        animate(sfCellularbarsRef.current, {
          clipPath: ["inset(0 0 0 0%)", "inset(0 0 0 100%)"],
          easing: "spring(1, 80, 13, 0)",
          duration: 600,
        });
      }
    }
  }, [liveActivityMode]);

  return (
    <>
      <header className="absolute top-0 left-0 z-50 flex h-[6%] w-full items-center justify-between px-[12%]">
        <div className="flex w-[20%] items-center justify-start">
          <span
            className={cn(
              "flex h-4.5 items-center font-sf-ui text-[3.8cqw] font-bold tracking-tight",
              theme === "light" ? "text-black" : "text-white",
            )}
          >
            <Clock />
          </span>
        </div>

        <div className="flex items-center justify-end gap-[1.5cqw]">
          <SfCellularbars ref={sfCellularbarsRef} style={{ width: 12 }} />
          <SfWifi style={{ width: 12 }} />
          <SfBattery100percent style={{ width: 22 }} />
        </div>
      </header>
      <LiveActivities />
    </>
  );
}
