import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import SidebarIcon from "@/app/Commons/Icons";
import NavItem from "./NavItem";
import { AnimatedDiv } from "@/app/AnimatedComponents";

const Sidebar = () => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  return (
    <>
      <Drawer open={sidebarActive} onOpenChange={setSidebarActive}>
        <div className="flex md:hidden lg:hidden fixed top-2.5 right-0 items-center justify-end w-full sidebarBtn">
          <DrawerTrigger asChild>
            <div
              className={`${sidebarActive ? "active" : ""} cursor-pointer w-fc`}
            >
              <SidebarIcon />
            </div>
          </DrawerTrigger>
        </div>
        <DrawerContent className="bg-white h-[60vh]">
          <AnimatedDiv className="bg-white rounded-t-2xl p-4"></AnimatedDiv>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
