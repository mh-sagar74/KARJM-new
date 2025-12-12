import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import EmbedMap from "@/components/embededMap/EmbedMap";
import CardWithIcon from "@/components/cardWithIcon/CardWithIcon";


export default function VisitUs() {
  const contactInfos = [{ icon: MapPin, title: "Address", description: "190 Haji Ismail Rd, Khulna (9100), Bangladesh" },
  { icon: Phone, title: "Phone", description: "+880 1911935762" },
  { icon: Mail, title: "Email", description: "mhsagarcse02@gmail.com" },
  { icon: Clock, title: "Open Hours", description: "Opens every day, 5 minutes before each prayer time (waqt adhan)." }]

  return (
    <VStack className="gap-5">
      <Center className="mb-2">
        <Text className="text-black font-bold text-2xl md:text-3xl text-center">Visit Us</Text>
      </Center>

      <Center className="mb-2">
        <Text className="text-lg text-center w-[100%] sm:w-[70%]">We welcome you to visit our mosque. Feel free to reach out with any questions.</Text>
      </Center>

      <Box className="grid gird-cols-1 md:grid-cols-2 gap-6">
        <Box className="grid grid-cols-1 gap-6">
          {contactInfos.map((contact, index) =>
            <CardWithIcon key={index} Icon={contact.icon}
              title={contact.title}
              description={contact.description} />
          )}
        </Box>
        <EmbedMap />
      </Box>
    </VStack>
  )
}


