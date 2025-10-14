"use client";

import { useEffect, useState } from "react";
import { Text } from "../ui/text";

export default function LiveDateTime() {
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    const update = () => setDateTime(new Date());
    update();

    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!dateTime) {
    return <Text>Loading...</Text>
  }

  return (
    <Text className="text-[#006830] text-lg font-semibold">{dateTime.toLocaleTimeString()} - {dateTime.toLocaleString("default", { day: "numeric", month: "short", year: "numeric" })}</Text>
  )
}
