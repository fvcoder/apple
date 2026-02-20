import { animate } from "animejs";
import { useEffect, useRef, useState } from "react";

export const LiveActivities = () => {
  const [mode, setMode] = useState("music"); // compact | music | expanded
  const islandRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Definimos las dimensiones según el modo
    const targets = {
      compact: { w: "33%", h: "3%", radius: "50px" },
      music: { w: "48%", h: "3.8%", radius: "22px" },
      expanded: { w: "92%", h: "22%", radius: "42px" },
    };

    const config = targets[mode];

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (islandRef.current !== null) {
      animate(islandRef.current, {
        width: config.w,
        height: config.h,
        borderRadius: config.radius,
        duration: 600,
        // Usamos un sistema de "spring" para imitar a Apple
        easing: "spring(1, 80, 13, 0)",
      });
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
      className="absolute top-[1%] left-1/2 z-50 flex -translate-x-1/2 cursor-pointer items-center justify-center overflow-hidden border border-white/5 bg-black shadow-2xl"
    >
      <div ref={contentRef} className="flex size-full items-center px-[3cqw]">
        {/* Vista: Música */}
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

        {/* Vista: Compacta (Sensores) */}
        {mode === "compact" && (
          <div className="flex w-full items-center justify-around opacity-30">
            <div className="h-[1.2cqw] w-[1.2cqw] rounded-full bg-blue-900 shadow-[0_0_2px_rgba(255,255,255,0.5)]" />
            <div className="h-[1cqw] w-[4.5cqw] rounded-full bg-zinc-800" />
          </div>
        )}

        {/* Vista: Expandida */}
        {mode === "expanded" && (
          <div className="flex w-full flex-col gap-[2cqw] p-[2cqw]">
            <div className="flex items-center gap-[3cqw]">
              <div className="h-[12cqw] w-[12cqw] rounded-[2.5cqw] bg-linear-to-tr from-orange-400 to-red-500" />
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
      </div>
    </div>
  );
};
