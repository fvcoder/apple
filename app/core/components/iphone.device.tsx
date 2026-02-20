import { cn } from "../utils/cn"

interface IPhoneDeviceProps {
    children?: React.ReactNode
    orientation?: 'vertical' | 'horizontal'
}
    
export function IPhoneDevice(props: IPhoneDeviceProps) {
    const orientation = props.orientation ? props.orientation : 'vertical';
    
    return (
        <div className={cn("@container relative overflow-hidden bg-white border-[6px] border-black rounded-[18%/8.5%]", orientation === "vertical" ?  "aspect-9/19.5" : "aspect-19.5/9")}>
            <div className="absolute 
              top-[2.5%] 
              left-1/2 
              -translate-x-1/2 
              w-[33%] 
              h-[3%] 
              bg-black 
              rounded-[50px] 
              ring-1 ring-white/10"></div>

              <div className="w-full h-full flex flex-col ">
    iPhone 14 Pro
  </div>
            
            {props.children}
        </div>
    )
}