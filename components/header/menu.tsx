"use client";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../logo";
const Menu = () => {
  return (
    <div className="flex gap-12 justify-center items-center">
      <Sheet>
        <SheetTrigger>
          <RxHamburgerMenu
            className="flex lg:hidden cursor-pointer"
            size={32}
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex items-center text-center bg-[url(/noisy_background.png)]"
        >
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col p-4">
            <Link href={"/"} className="text-xl cursor-pointer hover:underline">
              Home
            </Link>
            <Link
              href={"/products"}
              className="text-xl cursor-pointer hover:underline"
            >
              Products
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden lg:flex gap-12 justify-center items-center">
        <Link href={"/"} className="text-xl cursor-pointer hover:underline">
          Home
        </Link>
        <Link
          href={"/products"}
          className="text-xl cursor-pointer hover:underline"
        >
          Products
        </Link>
      </div>
    </div>
  );
};

export default Menu;
