import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

export default function AboutMosque() {
  return (
    <VStack>
      <Text className="text-black font-semibold text-2xl md:text-3xl mb-4">About Mosque</Text>
      <Box className="grid grid-cols-1 md:grid-cols-2">

        <Text>
          The Khanjahan Ali Rahmatullah Jame Masjid is a Sunni mosque located in Khulna, Khulna. Established in 1980, it has been serving the local community for several decades. This mosque is known for its beautiful architecture and tranquil atmosphere, making it a peaceful place for worship.

          The mosque provides prayer facilities only for men, ensuring that everyone feels welcome and comfortable. Additionally, the mosque is kid-friendly.

          For those with mobility needs, the Khanjahan Ali Rahmatullah Jame Masjid offers wheelchair amenities. There is a designated prayer space available to accommodate individuals using wheelchairs, ensuring that they can participate in the prayers without any difficulty. While specific details about parking, toilets, and Odhu facilities for wheelchair users are not provided, it can be assumed that efforts are made to cater to the needs of individuals with disabilities.

          With its friendly and helpful imam, this mosque not only serves as a place of worship but also as a community center. The imam is known for his approachability and eagerness to assist those who visit the mosque. Whether you are seeking a place for prayer or simply want to experience the peaceful ambiance, the Khanjahan Ali Rahmatullah Jame Masjid is a welcoming mosque in Khulna, Khulna.
        </Text>

        <Text>Image</Text>
      </Box>
    </VStack>
  )
}
