import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import EmbedMap from "@/components/embededMap/EmbedMap";


export default function VisitUs() {
  const contactInfos = [{ icon: MapPin, title: "Address", content: "190 Haji Ismail Rd<br/>Khulna, 9100<br />Bangladesh" },
  { icon: Phone, title: "Phone", content: "+880 1300842702" },
  { icon: Mail, title: "Email", content: "mhsagarcse02@gmail.com" },
  { icon: Clock, title: "Open Hours", content: "Opens every day, 5 minutes before each prayer time (waqt adhan)." }]

  return (
    <VStack className="gap-5">
      <Center className="mb-2">
        <Text className="text-black font-semibold text-2xl md:text-3xl text-center">Visit Us</Text>
      </Center>

      <Center className="mb-2">
        <Text className="text-lg text-center w-[100%] sm:w-[70%]">We welcome you to visit our mosque. Feel free to reach out with any questions.</Text>
      </Center>

      <Box className="grid gird-cols-1 md:grid-cols-2 gap-6">
        <Box className="grid grid-cols-1 gap-6">
          {contactInfos.map((contact, index) =>
            <VStack key={index} className="border rounded-xl border-black p-4 sm:p-6 items-start hover:shadow-md hover:shadow-[#006830]/70 transition duration-300 ease-in-out">
              <HStack className="items-center">
                <Center className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                  <contact.icon className="h-6 w-6" />
                </Center>
                <VStack className="justify-center pl-3 sm:pl-4 gap-2">
                  <Text className="text-black text-lg font-semibold">{contact.title}</Text>
                  <Text dangerouslySetInnerHTML={{ __html: contact.content }} className="text-lg" />
                </VStack>
              </HStack>
            </VStack>)}
        </Box>
        <EmbedMap />
      </Box>
    </VStack>
  )
}


