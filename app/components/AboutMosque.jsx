import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import Image from "next/image";

export default function AboutMosque() {
  return (
    <VStack>
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-4 content-center">
        <VStack className="justify-center p-2 sm:p-3 md:p-6">
          <Text className="text-black font-semibold text-2xl md:text-3xl mb-4">About Mosque</Text>
          <Text className="text-lg">
            The Khanjahan Ali Rahmatullah Jame Masjid is a Sunni mosque located in Khulna, Khulna.
            Established in 1980, it has been serving the local community for several decades.
            This mosque is known for its beautiful architecture and tranquil atmosphere,
            making it a peaceful place for worship.

            The mosque provides prayer facilities only for men, ensuring that everyone feels welcome and comfortable. Additionally,
            the mosque is kid-friendly.
          </Text>
        </VStack>

        <Center className="relative w-[100%] h-[400px] md:h[500px]">
          <Image alt="KARJM" src={"/insideMosque.png"} fill className="object-cover rounded-xl md:rounded-2xl shadow-md" />
        </Center>
      </Box>
    </VStack>
  )
}
