import { cn } from "../utils/cn"

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div className={cn(`w-full md:max-w-5xl px-6 mx-auto`, className)}>
            {children}
        </div>
    )
}