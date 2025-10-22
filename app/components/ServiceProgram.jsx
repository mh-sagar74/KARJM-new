import CardWithIcon from "@/components/cardWithIcon/CardWithIcon";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { GraduationCap, UsersRound, HandHeart, Gem } from "lucide-react";

export default function ServiceProgram() {

  const services = [{ icon: GraduationCap, title: "Islamic Education", description: "Quran classes, Arabic lessons, and Islamic studies for all ages." },
  { icon: UsersRound, title: "Youth Programs", description: "Engaging activities and mentorship for young Muslims." },
  { icon: HandHeart, title: "Community Outreach", description: "Charity initiatives and support for those in need." },
  { icon: Gem, title: "Nikah (Marriage) Service", description: "Islamic marriage (Nikah) service, including registration, officiation by the imam, and guidance for couples to begin their union with blessings and faith." }]

  return (
    <VStack className="gap-5">
      <Center className="mb-2">
        <Text className="text-black font-bold text-2xl md:text-3xl text-center">Our Services & Programs</Text>
      </Center>

      <Center className="mb-2">
        <Text className="text-lg text-center w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%]">We offer a variety of programs and services to support the spiritual, educational, and social needs of our community.</Text>
      </Center>

      <Box className="grid gird-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) =>
          <CardWithIcon key={index} Icon={service.icon}
            title={service.title}
            description={service.description} />
        )}
      </Box>
    </VStack>
  )
}
