import { cn } from "tailwind-variants";

import { Clock } from "~/core/components/clock";
import { SfBattery100percent } from "~/core/icons/sfBattery100percent";
import { SfCellularbars } from "~/core/icons/sfCellularbars";
import { SfWifi } from "~/core/icons/sfWifi";

export interface StatusBarProps {
  theme: "light" | "dark";
}

function getStatusBarOptions(props: Partial<StatusBarProps>): StatusBarProps {
  return {
    theme: props.theme ?? "light",
  };
}

export function StatusBar(props?: Partial<StatusBarProps>) {
  const options = getStatusBarOptions(props ?? {});

  return (
    <header className="absolute top-0 left-0 z-50 flex h-[6%] w-full items-center justify-between px-[12%]">
      <div className="flex w-[20%] items-center justify-start">
        <span
          className={cn(
            "font-sf-ui text-[3.8cqw] font-bold tracking-tight",
            options.theme === "light" ? "text-black" : "text-white",
          )}
        >
          <Clock />
        </span>
      </div>

      {/* 2. Centro: Hueco para la Dynamic Island (opcional si ya la tienes posicionada absolute) */}
      <div className="flex w-[33%] justify-center">{/* Aquí iría tu componente <DynamicIsland /> */}</div>

      <div className="flex w-[20%] items-center justify-end gap-[1.5cqw]">
        <SfCellularbars width={14} />
        <SfWifi width={14} />
        <SfBattery100percent width={14} />
      </div>
    </header>
  );
}
