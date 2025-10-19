export const revalidate = 86400;

import LiveDateTime from "@/components/liveclock/LiveDateTime";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import PrayerTimeCalculator from "@masaajid/prayer-times";
import { Clock } from "lucide-react";

export default function PrayerTimes() {

  const calculator = new PrayerTimeCalculator({
    method: "Karachi",
    location: [22.8079661, 89.548438],
    timezone: "Asia/Dhaka",
  });

  const prayersRaw = calculator.calculate();

  const prayers = [{ name: "Fajr", waqt: prayersRaw.fajr, iqamah: "06:45am", isActive: false },
  { name: "Dhuhr", waqt: prayersRaw.dhuhr, iqamah: "01:30pm", isActive: false },
  { name: "Asr", waqt: prayersRaw.asr, iqamah: "04:45pm", isActive: true },
  { name: "Maghrib", waqt: prayersRaw.maghrib, iqamah: "06:45pm", isActive: false },
  { name: "Isha", waqt: prayersRaw.isha, iqamah: "08:45pm", isActive: false }];

  return (
    <VStack className="gap-5">
      <HStack className="items-center justify-center gap-3 mb-2">
        <Text className="text-black font-bold text-2xl md:text-3xl">Prayer Times</Text>
        <Clock strokeWidth={3} />
      </HStack>

      <Center className="mb-2">
        <LiveDateTime />
      </Center>

      <Box className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {prayers.map((prayer, index) =>
          <Center key={index} className={prayer.isActive ? "bg-[#006830] bg-opacity-20 border border-black rounded-lg gap-2 hover:shadow-md hover:shadow-[#006830]/70 transition duration-300 ease-in-out"
            : "border border-black rounded-lg gap-2 hover:shadow-md hover:shadow-[#006830]/70 transition duration-300 ease-in-out"}>
            <Center className="gap-2 mx-[30px] sm:mx-[40px] my-[10px]">
              <Text className="text-black text-lg text-center">{prayer.name}</Text>
              <Text className="text-black text-xl font-semibold text-center">{prayer.iqamah}</Text>
              <Text className="text-center font-semibold">Waqt: {new Date(prayer.waqt).toLocaleTimeString("en-BD", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                timezone: "Asia/Dhaka",
              })}</Text>
            </Center>
          </Center>)}
      </Box>

      <Center>
        <Text className="text-red-600 text-center">Jumu'ah Khutba at 1:15pm (all year).</Text>
      </Center>
    </VStack>
  )
}
