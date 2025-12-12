import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [{ href: "/", label: "Home" }, { href: "/prayer-times", label: "Prayer Times" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },];

  const contactUs = [{ href: "https://www.facebook.com/karjm1980/", label: "Facebook" },
  { href: "https://wa.me/8801911935762", label: "Whatsapp" }];

  const devInfo = [{ href: "https://www.linkedin.com/in/mominul-haque-sagar-3a270123a/", label: "Linkedin" },
  { href: "https://github.com/mh-sagar74", label: "Github" },
  { href: "https://www.facebook.com/mr.sagar74", label: "Facebook" },
  { href: "https://wa.me/8801300842702", label: "Whatsapp" },
  { href: "https://x.com/MominulHaque04", label: "Twitter" }];


  return (
    <VStack className="mx-[20px] md:mx-[60px]">
      <Box className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  mt-[70px] md:mt-[100px] mb-[10px] md:mb-[15px] gap-8">
        <VStack>
          <Link href={"/"}>
            <Image className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] mb-2" source={{ uri: "/logo.png" }} alt="KARJM logo" />
          </Link>
          <Text className="text-sm md:text-base text-black">
            Serving the community with faith, knowledge, and compassion since 1980.
          </Text>
        </VStack>

        <VStack className="gap-0.5">
          <Text className="font-bold text-black text-base md:text-lg mb-2">Quick Links</Text>
          {quickLinks.map((link, index) => <Link key={index} href={link.href}>
            <Text className="text-sm md:text-base text-black hover:text-[#006830]">{link.label}</Text>
          </Link>)}
        </VStack>

        <VStack className="gap-0.5">
          <Text className="font-bold text-black text-base md:text-lg mb-2">Contact Us</Text>
          {contactUs.map((contact, index) => <Link key={index} href={contact.href}>
            <Text className="text-sm md:text-base text-black hover:text-[#006830]">{contact.label}</Text>
          </Link>)}
        </VStack>

        <VStack className="gap-0.5">
          <Text className="font-bold text-black text-base md:text-lg mb-2">Developer Info</Text>
          {devInfo.map((dev, index) => <Link key={index} href={dev.href}>
            <Text className="text-sm md:text-base text-black hover:text-[#006830]">{dev.label}</Text>
          </Link>)}
        </VStack>
      </Box>

      <Divider className="bg-black" />

      <Center>
        <Text className="text-sm text-black my-[10px] md:my-[15px] text-center">&copy; 2025-{new Date().getFullYear()} KARJM. All rights reserved.</Text>
      </Center>
    </VStack>)
}
