"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Text } from "@/components/ui/text";

function NavLink({ href, label }) {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link href={href}>
      <Text className={isActive ? "bg-[#006830] text-base md:text-lg text-white font-semibold px-2 py-1 rounded" : "text-black text-base md:text-lg font-normal px-2 py-1 rounded hover:bg-[#006830] hover:text-white transition duration-300 ease-in-out"}>{label}</Text>
    </Link>
  );
}

export default NavLink;
