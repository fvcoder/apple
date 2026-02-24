import { cn } from "tailwind-variants";

import { useAppLauncher } from "../state/useAppLauncher";

import { SfMagnifyingGlass } from "~/core/icons/sfMagnifyingglass";

export function SearchButton() {
  const homePage = useAppLauncher((x) => x.homePage);
  const homePageCount = useAppLauncher((x) => x.homePageCount);

  return (
    <div className="relative mx-auto h-8 w-fit rounded-2xl border border-white/20 backdrop-blur-xs">
      <button className="hidden size-full h-full items-center justify-center gap-1.5 text-white">
        <SfMagnifyingGlass width={12} />
        <span className="font-sf-ui text-xs select-none">Buscar</span>
      </button>
      <div className="inset-x-0 bottom-0 flex size-full items-center justify-center gap-2 px-3">
        {Array.from({ length: homePageCount }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "inline-block size-2 rounded-full bg-white transition-opacity duration-300",
              i + 1 === homePage ? "opacity-100" : "opacity-50",
            )}
          />
        ))}
      </div>
    </div>
  );
}
