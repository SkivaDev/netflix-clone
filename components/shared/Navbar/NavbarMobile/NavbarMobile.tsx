import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Logo } from "@/components/shared/Logo";
import { BellRing, Menu, Search } from "lucide-react";
import { itemsNavbar } from "@/data/ItemsNavbar";
import Link from "next/link";
import { NavbarMobileProps } from "./NavbarMobile.types";
import { SelectorProfile } from "@/components/shared/SelectorProfile";

export const NavbarMobile = (props: NavbarMobileProps) => {

  const { users } = props;

  return (
    <div className="p-4 flex justify-between">
      <Logo />

      <Sheet>
        <SheetTrigger>
          <Menu className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-black">
          <div className="flex flex-col gap-4">
            {itemsNavbar.map((item, index) => (
              <Link key={index} href={item.link} className="hover:text-gray-300 transition-all duration-300">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="border border-white/70 my-5"/>
            <div className="flex justify-between gap-6 mt-4">
                <Search className="cursor-pointer" />
                <BellRing className="cursor-pointer" />
                <SelectorProfile users={users} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
