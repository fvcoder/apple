import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState(() => {
    const now = new Date();

    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <>{time}</>;
}
