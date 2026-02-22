import { useMemo } from "react";

import { useDevice } from "~/core/state/device.state";
import { iPhoneSafeAreaInsets } from "~/device/iphone/data/constants";
import type { AppOptions } from "~/device/types";

const LauncherApp: () => React.ReactNode = () => {
  const activeDevice = useDevice((x) => x.activeDevice);
  const safeAreaInsets = useMemo(() => {
    return activeDevice === "iphone" ? iPhoneSafeAreaInsets : { top: 0, bottom: 0, left: 0, right: 0 };
  }, [activeDevice]);

  return (
    <section
      className="size-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(public/iphone/bg/iClarified-iOS26-Sky-HomeScreen-Light.jpg)` }}
    >
      <div
        className="flex size-full flex-col"
        style={{
          padding: `${safeAreaInsets.top}px ${safeAreaInsets.right}px ${safeAreaInsets.bottom}px ${safeAreaInsets.left}px`,
        }}
      >
        <main className="flex-1">
          <h1 className="text-2xl font-bold text-white">Launcher</h1>
          {JSON.stringify(safeAreaInsets)}
        </main>

        <footer className="mx-auto mb-4.5 grid h-26.25 w-94.5 grid-cols-4 gap-6 overflow-hidden rounded-[40px] border border-white/50 px-4.5 py-5 backdrop-blur-xs">
          <div className="size-full rounded-2xl bg-red-500">asa</div>
          <div className="size-full rounded-2xl bg-red-500">asa</div>
          <div className="size-full rounded-2xl bg-red-500">asa</div>
          <div className="size-full rounded-2xl bg-red-500">asa</div>
        </footer>
      </div>
    </section>
  );
};

function LauncherIcon() {
  return <div className="size-full rounded-2xl bg-red-500">asa</div>;
}

export const Launcher = Object.assign<typeof LauncherApp, AppOptions>(LauncherApp, {
  icon: LauncherIcon,
});
