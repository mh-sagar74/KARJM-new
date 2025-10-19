import LiveDateTime from "@/components/liveclock/LiveDateTime";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Clock } from "lucide-react";

export default function PrayerTimes() {
  const prayers = [{ name: "Fajr", waqt: "06:30am", iqamah: "06:45am", isActive: false }, { name: "Dhuhr", waqt: "01:00pm", iqamah: "01:30pm", isActive: false },
  { name: "Asr", waqt: "04:30pm", iqamah: "04:45pm", isActive: true }, { name: "Maghrib", waqt: "06:30pm", iqamah: "06:45pm", isActive: false },
  { name: "Isha", waqt: "08:30pm", iqamah: "08:45pm", isActive: false }];

  return (
    <VStack className="gap-5">
      <HStack className="items-center justify-center gap-3 mb-2">
        <Text className="text-black font-bold text-2xl md:text-3xl">Prayer Times</Text>
        <Clock strokeWidth={3} />
      </HStack>

      <Center className="mb-2">
        <LiveDateTime />
      </Center>

      <Box className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {prayers.map((prayer, index) =>
          <Center key={index} className={prayer.isActive ? "bg-[#006830] bg-opacity-20 px-[40px] py-[10px] sm:px-[60px] sm:py-[10px] border border-black rounded-lg gap-2 hover:shadow-md hover:shadow-[#006830]/70 transition duration-300 ease-in-out"
            : "px-[40px] py-[10px] sm:px-[60px] sm:py-[10px] border border-black rounded-lg gap-2 hover:shadow-md hover:shadow-[#006830]/70 transition duration-300 ease-in-out"}>
            <Center className="gap-2">
              <Text className="text-black text-lg text-center">{prayer.name}</Text>
              <Text className="text-black text-lg font-semibold text-center">{prayer.iqamah}</Text>
              <Text className="text-xs text-center">Waqt: {prayer.waqt}</Text>
            </Center>
          </Center>)}
      </Box>

      <Center>
        <Text className="text-red-600 text-center">Jumu'ah Khutba at 1:15pm (all year).</Text>
      </Center>
    </VStack>
  )
} 
