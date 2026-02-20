import { cn } from "../../utils/cn";

import { LiveActivities } from "./liveActivities";
import { StatusBar, type StatusBarProps } from "./statusBar";

interface IPhoneDeviceProps {
  children?: React.ReactNode;
  orientation?: "vertical" | "horizontal";

  statusBar?: Partial<StatusBarProps>;
}

export function IPhoneDevice(props: IPhoneDeviceProps) {
  const orientation = props.orientation ?? "vertical";

  return (
    <div
      className={cn(
        "@container relative overflow-hidden rounded-[18%/8.5%] border-[6px] border-black bg-white",
        orientation === "vertical" ? "aspect-9/19.5" : "aspect-19.5/9",
      )}
    >
      <LiveActivities />
      <StatusBar {...props.statusBar} />

      {props.children}
    </div>
  );
}
