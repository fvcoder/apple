import { cn } from "../utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn(`mx-auto w-full px-6 md:max-w-5xl`, className)}>{children}</div>;
}
