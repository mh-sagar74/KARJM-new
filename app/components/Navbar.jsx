"use client"

import { HStack } from "@/components/ui/hstack";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Menu as MenuIcon } from "lucide-react";
import { Button, ButtonIcon } from "@/components/ui/button";
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
} from '@/components/ui/drawer';
import { Icon, CloseIcon } from '@/components/ui/icon';
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";
function Navbar() {
  const [showDrawer, setShowDrawer] = useState(false);

  const navLinks = [{ href: "/", label: "Home" }, { href: "/prayer-times", label: "Prayer Times" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },];

  return (
    <HStack className="gap-2 justify-between fixed top-0 right-0 left-0 w-full z-50 shadow-sm px-[20px] md:px-[60px] h-[60px] md:h-[80px] lg:h-[90px] bg-white" reversed={false} >
      <HStack className="items-center">
        <Link href={"/"}>
          <Image className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]" source={{ uri: "/logo.png" }} alt="KARJM logo" />
        </Link>
        <Link href={"/"}>
          <Text className="text-[#006830] font-bold text-sm sm:text-lg md:text-xl">Khanjahan Ali (R:) Jame Masjid</Text>
        </Link>
      </HStack>

      <HStack className="items-center hidden lg:flex lg:gap-2">
        {navLinks.map((nav, index) => <NavLink key={index} href={nav.href} label={nav.label} />)}
      </HStack>

      <HStack className="items-center flex lg:hidden">
        <Button action={"secondary"} size={"xs"}
          onPress={() => {
            setShowDrawer(true);
          }}
        >
          <ButtonIcon as={MenuIcon} size={20} />
        </Button>
        <Drawer className="fixed h-[100vh]"
          isOpen={showDrawer}
          size="md"
          anchor="right"
          onClose={() => {
            setShowDrawer(false);
          }}
        >
          <DrawerBackdrop />
          <DrawerContent>
            <DrawerHeader>
              <Text className="font-bold text-black text-2xl">Menu</Text>
              < DrawerCloseButton >
                <Icon as={CloseIcon} />
              </DrawerCloseButton>
            </DrawerHeader>
            <DrawerBody>
              <VStack space={"xl"} className="pt-4">
                {navLinks.map((nav, index) => <NavLink key={index} href={nav.href} label={nav.label} />)}
              </VStack>

            </DrawerBody>
            <DrawerFooter className="justify-center">
              <Link href={"/"}>
                <Image className="h-[60px] w-[60px]" source={{ uri: "/logo.png" }} />
              </Link>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </HStack>
    </HStack >
  );
}
export default Navbar;
