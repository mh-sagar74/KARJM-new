import { Center } from "@/components/ui/center";
import { Grid, GridItem } from "@/components/ui/grid";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import React from "react";
import PrayerTimes from "./components/PrayerTimes";
import AboutMosque from "./components/AboutMosque";
import ServiceProgram from "./components/ServiceProgram";
import VisitUs from "./components/VisitUs";
import { CustomScrollDown } from "@/components/customScrollDown/CustomScrollDown";

export default function Home() {
  return (
    <Grid className="gap-4 grid-cols-10" >
      <GridItem className="col-span-10">
        <CustomScrollDown>
          <Center className="pt-[20px] sm:pt-[30px] md:pt-[50px] pb-[15px] sm:pb-[25px] md:pb-[40px]">
            <Text className="text-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Welcome to Khanjahan Ali (R:) Jame Masjid</Text>
          </Center>
        </CustomScrollDown>
      </GridItem>

      <GridItem className="col-span-10 flex justify-center">
        <CustomScrollDown>
          <Center className="w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%] m-auto">
            <Text className="text-center text-black text-lg sm:text-xl">A place of worship, community, and spiritual growth. Join us in prayer, learning, and service to strengthen our faith and community bonds.</Text>
          </Center>
        </CustomScrollDown>
      </GridItem>

      <GridItem className="col-span-10 flex justify-center mt-[40px] md:mt-[70px]">
        <Center className="relative w-[100%] md:w-[80%] h-[400px] md:h-[500px] lg:h-[700px] mt-[30px] md:mt-[50px] mb-[40px] md:mb-[70px]">
          <Image src={"/mosque.png"} alt="KARJM" fill className="object-cover rounded-xl md:rounded-2xl shadow-2xl" />
        </Center>
      </GridItem>

      <GridItem className="col-span-10 flex justify-center my-[40px] md:my-[70px]">
        <CustomScrollDown>
          <PrayerTimes />
        </CustomScrollDown>
      </GridItem>

      <GridItem className="col-span-10 flex justify-center my-[40px] md:my-[70px]">
        <CustomScrollDown>
          <AboutMosque />
        </CustomScrollDown>
      </GridItem>

      <GridItem className="col-span-10 flex justify-center my-[40px] md:my-[70px]">
        <CustomScrollDown>
          <ServiceProgram />
        </CustomScrollDown>
      </GridItem>

      <GridItem className="col-span-10 flex justify-center my-[40px] md:my-[70px]">
        <CustomScrollDown>
          <VisitUs />
        </CustomScrollDown>
      </GridItem>
    </Grid >
  )
}
