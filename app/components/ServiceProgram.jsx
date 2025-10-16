import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { GraduationCap, UsersRound, HandHeart, Gem } from "lucide-react";

export default function ServiceProgram() {

  const services = [{ icon: <GraduationCap />, title: "Something", description: "Something plus" },
  { icon: <UsersRound />, title: "Something p", description: "Something plus" },
  { icon: <HandHeart />, title: "Something pr", description: "Something pro" },
  { icon: <Gem />, title: "Something mx", description: "Something pro max" }]

  return (
    <VStack className="gap-5">
      <Center className="mb-2">
        <Text className="text-black font-semibold text-2xl md:text-3xl">Our Services & Programs</Text>
      </Center>

      <Box className="grid gird-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) =>
          <Center key={index} className="border w-[100%]">
            <HStack>
              <Center>{service.icon}</Center>
              <VStack>
                <Text>{service.title}</Text>
                <Text>{service.description}</Text>
              </VStack>
            </HStack>
          </Center>)}
      </Box>
    </VStack>
  )
}
