/* eslint-disable check-file/folder-naming-convention */

import { animate } from "animejs";
import { useEffect, useRef } from "react";

import { useIPhoneStore } from "~/core/state/iphone.state";

export const dynamicIslandAnatomy = {
  default: { width: 136, height: 40 },
  compact: { width: 208, height: 40 },
  expanded: { width: 400, height: 173 },
};

export type DynamicIslandAnatomyKeys = keyof typeof dynamicIslandAnatomy;
export const dynamicIslandAnatomyKeys = Object.keys(dynamicIslandAnatomy) as Array<keyof typeof dynamicIslandAnatomy>;

export function DynamicIslandIPhone() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const mode = useIPhoneStore((x) => x.statusBarDynamicIslandMode);
  const setMode = useIPhoneStore((x) => x.statusBarSetDynamicIslandMode);

  function changeMode() {
    const index = dynamicIslandAnatomyKeys.indexOf(mode);
    const nextIndex = (index + 1) % dynamicIslandAnatomyKeys.length;
    setMode(dynamicIslandAnatomyKeys[nextIndex]);
  }

  useEffect(() => {
    if (containerRef.current === null) {
      return;
    }

    const config = dynamicIslandAnatomy[mode];

    animate(containerRef.current, {
      width: config.width,
      height: config.height,
      duration: 600,
      easing: "spring(1, 80, 13, 0)",
    });
  }, [mode]);

  return (
    <>
      <div className="absolute top-3 left-1/2 z-99 -translate-x-1/2">
        <div ref={containerRef} className="flex h-10 w-34 items-center gap-1 rounded-[50px] bg-red-500">
          content
        </div>
      </div>
      <div className="absolute top-3 left-1/2 z-100 -translate-x-1/2" onClick={changeMode}>
        <div className="flex h-10 w-34 items-center gap-1 rounded-full bg-black">
          <div className="my-2 ml-1 flex h-8 w-auto flex-1 items-center rounded-full border-4 bg-zinc-900 px-1">
            <span className="block size-2 rounded-full bg-white"></span>
          </div>
          <span className="block size-1.5 rounded-full bg-green-500"></span>
          <div className="my-2 mr-1 size-8 rounded-full border-4">
            <div className="size-full overflow-hidden rounded-full border-4 border-zinc-900">
              <div className="size-full rounded-full bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
