import { Center } from "../ui/center";
import { HStack } from "../ui/hstack";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";

export default function CardWithIcon({ Icon, title, description }) {
  return (
    <HStack className="border rounded-xl border-black p-4 sm:p-6 items-center hover:shadow-md hover:shadow-[#006830]/70 transition duration-300 ease-in-out">
      <Center className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
        <Icon className="h-6 w-6" />
      </Center>
      <VStack className="justify-center pl-3 sm:pl-4 gap-2">
        <Text className="text-black text-lg font-semibold">{title}</Text>
        <Text className="text-lg break-words whitespace-normal">{description}</Text>
      </VStack>
    </HStack>
  )
}
