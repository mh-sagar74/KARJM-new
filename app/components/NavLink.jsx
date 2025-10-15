"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Text } from "@/components/ui/text";

function NavLink({ href, label }) {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link href={href} className="text-center">
      <Text className={isActive ? "bg-[#006830] text-lg lg:text-xl text-white font-bold px-2 py-1 rounded" : "text-black text-lg lg:text-xl font-normal px-2 py-1 rounded hover:bg-[#006830] hover:text-white transition duration-300 ease-in-out"}>{label}</Text>
    </Link>
  );
}

export default NavLink;
