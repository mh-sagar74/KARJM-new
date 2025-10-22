"use client";

import LiveDateTime from "@/components/liveclock/LiveDateTime";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import PrayerTimeCalculator from "@masaajid/prayer-times";
import { Clock } from "lucide-react";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export default function PrayerTimes() {
  const [prayers, setPrayers] = useState([]);

  const prayerCalculator = () => {
    const calculator = new PrayerTimeCalculator({
      method: "Karachi",
      location: [22.8079661, 89.548438],
      timezone: "Asia/Dhaka",
    });

    const prayersRaw = calculator.calculate();

    const todayPrayers = [{ name: "Fajr", waqt: prayersRaw.fajr, iqamah: "05:00am", isActive: false },
    { name: "Dhuhr", waqt: prayersRaw.dhuhr, iqamah: "01:30pm", isActive: false },
    { name: "Asr", waqt: prayersRaw.asr, iqamah: "04:15pm", isActive: false },
    { name: "Maghrib", waqt: prayersRaw.maghrib, iqamah: "05:40pm", isActive: false },
    { name: "Isha", waqt: prayersRaw.isha, iqamah: "08:00pm", isActive: false }];

    setPrayers(updateActivePrayer(todayPrayers));
  }

  let activeIndex = -1;
  const updateActivePrayer = (prayersList) => {
    const now = DateTime.local().setZone("Asia/Dhaka");

    for (let i = 0; i < prayersList.length; i++) {
      const prayerTime = DateTime.fromJSDate(new Date(prayersList[i].waqt)).setZone("Asia/Dhaka");
      if (now >= prayerTime) {
        activeIndex = i
      }
    }

    return prayersList.map((prayer, index) => ({
      ...prayer, isActive: index === activeIndex
    }))
  }

  useEffect(() => {
    prayerCalculator();

    const dailyInterval = setInterval(() => {
      prayerCalculator();
    }, 86400000);

    const updateActiveInterval = setInterval(() => {
      setPrayers((prev) => updateActivePrayer(prev));
    }, 60000);

    return () => {
      clearInterval(dailyInterval);
      clearInterval(updateActiveInterval);
    }
  }, [])

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
          <Center key={index} className={prayer.isActive ? "bg-[#006830] bg-opacity-20 border border-black rounded-lg gap-2"
            : "border border-black rounded-lg gap-2 hover:shadow-md hover:shadow-[#006830]/70 transition duration-300 ease-in-out"}>
            <Center className="gap-2 mx-[30px] sm:mx-[40px] my-[15px]">
              <Text className="text-black text-lg text-center">{prayer.name}</Text>
              <Text className="text-black text-xl font-semibold text-center">{prayer.iqamah}</Text>
              <Text className="text-center font-semibold">Waqt:{" "}
                {DateTime.fromJSDate(new Date(prayer.waqt)).setZone("Asia/Dhaka").toFormat("hh:mma")}
              </Text>
            </Center>
          </Center>)}
      </Box>

      <Center>
        <Text className="text-red-600 text-center">Jumu'ah Khutba at 1:15pm (all year).</Text>
      </Center>
    </VStack>
  )
}
