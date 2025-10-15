import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { GraduationCap, UsersRound } from "lucide-react";

export default function ServiceProgram() {

  const services = [{ icon: <GraduationCap />, title: "Something", description: "Something plus" },
  { icon: <UsersRound />, title: "Something", description: "Something plus" }]

  return (
    <VStack>
      <Center>
        <Text className="text-black font-semibold text-2xl md:text-3xl">Our Services & Programs</Text>
      </Center>
    </VStack>
  )
}
