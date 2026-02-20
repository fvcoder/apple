import { animate } from "animejs";
import { useEffect, useRef } from "react";

import { SfPhoneDownFill } from "~/core/icons/sfPhoneDownFill";
import { SfPhoneFill } from "~/core/icons/sfPhoneFill";
import { useIPhoneStore } from "~/core/state/iphone.state";

const targets = {
  compact: { w: "25%", h: "3%", radius: "50px" },
  music: { w: "48%", h: "3.8%", radius: "22px" },
  expanded: { w: "90%", h: "22%", radius: "42px" },
  call: { w: "90%", h: "10%", radius: "50px" },
};

export type LiveActivityMode = keyof typeof targets;

export interface LiveActivitiesProps {
  mode: LiveActivityMode;
  setMode: (mode: LiveActivityMode) => void;
}

export const LiveActivities = () => {
  const mode = useIPhoneStore((x) => x.statusBarLiveActivityMode);
  const setMode = useIPhoneStore((x) => x.statusBarSetLiveActivityMode);
  const islandRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const config = targets[mode];

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (islandRef.current !== null) {
      if (mode === "call") {
        animate(islandRef.current, {
          width: config.w,
          height: config.h,
          borderRadius: config.radius,
          top: "1%",
          duration: 600,
          easing: "spring(1, 80, 13, 0)",
        });
      } else {
        animate(islandRef.current, {
          width: config.w,
          height: config.h,
          borderRadius: config.radius,
          top: "1.5%",
          duration: 600,
          easing: "spring(1, 80, 13, 0)",
        });
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (contentRef.current !== null) {
      animate(contentRef.current, {
        opacity: [0, 1],
        translateY: [mode === "compact" ? 0 : 5, 0],
        duration: 400,
        easing: "easeOutExpo",
      });
    }
  }, [mode]);

  return (
    <div
      ref={islandRef}
      onClick={() => setMode(mode === "compact" ? "music" : mode === "music" ? "expanded" : "compact")}
      className="absolute top-[1.5%] left-1/2 z-50 flex -translate-x-1/2 cursor-pointer items-center justify-center overflow-hidden border border-white/5 bg-black shadow-2xl"
    >
      <div ref={contentRef} className="flex size-full items-center px-[3cqw]">
        {mode === "music" && (
          <div className="flex w-full items-center justify-between">
            <div className="h-[4cqw] w-[4cqw] rounded-[1cqw] bg-linear-to-br from-purple-500 to-pink-500" />
            <div className="flex gap-[0.5cqw]">
              <div className="h-[2cqw] w-[0.8cqw] animate-pulse bg-green-400" />
              <div className="h-[3cqw] w-[0.8cqw] animate-pulse bg-green-400 delay-75" />
              <div className="h-[1.5cqw] w-[0.8cqw] animate-pulse bg-green-400 delay-150" />
            </div>
          </div>
        )}

        {mode === "compact" && (
          <div className="flex w-full items-center justify-around opacity-30">
            <div className="h-[1.2cqw] w-[1.2cqw] rounded-full bg-blue-500" />
            <div className="h-[1cqw] w-[4.5cqw] rounded-full bg-zinc-800" />
          </div>
        )}

        {mode === "expanded" && (
          <div className="flex w-full flex-col gap-[2cqw] p-[2cqw]">
            <div className="flex gap-[3cqw]">
              <div className="size-[12cqw] rounded-[2.5cqw] bg-linear-to-tr from-orange-400 to-red-500" />
              <div className="flex flex-col">
                <span className="text-[3.5cqw] font-bold text-white">Now Playing</span>
                <span className="text-[3cqw] text-zinc-500">Artist Name - Song</span>
              </div>
            </div>
            <div className="relative h-[1cqw] w-full rounded-full bg-zinc-800">
              <div className="absolute top-0 left-0 h-full w-[40%] rounded-full bg-white" />
            </div>
          </div>
        )}

        {mode === "call" && (
          <div className="flex w-full flex-col gap-[2cqw]">
            <div className="flex gap-[3cqw]">
              <div className="size-[12cqw] rounded-full bg-linear-to-tr from-orange-400 to-red-500" />
              <div className="flex flex-1 flex-col justify-end">
                <span className="mb-1 font-sf-ui text-[3.5cqw]/1 text-zinc-500">IPhone</span>
                <span className="font-sf-text text-[4cqw] font-bold text-white">Fernando Ticona</span>
              </div>
              <div className="flex gap-[2cqw]">
                <div className="flex size-[12cqw] items-center justify-center rounded-full bg-red-500">
                  <SfPhoneDownFill className="inline-block w-3/6 text-white" />
                </div>
                <div className="flex size-[12cqw] items-center justify-center rounded-full bg-green-500">
                  <SfPhoneFill className="inline-block h-2/4 text-white" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
