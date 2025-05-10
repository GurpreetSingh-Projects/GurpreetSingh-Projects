"use client";
import Image from "next/image";
import NavItem from "./NavItem";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { sizeCheck } from "./utilities";
import Lenis from "lenis";
const Header = () => {
  const [showIcons, setShowIcons] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 500], ["60%", "70%"]);
  const fontSize = useTransform(scrollY, [0, 300], ["14px", "16px"]);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setShowIcons(true);
    } else {
      setShowIcons(false);
    }
  });
  return (
    <>
      {(sizeCheck() === "laptop" || sizeCheck() === "desktop") && (
        <div className="hidden md:flex lg:flex fixed top-2 items-center justify-center w-full z-50">
          <div className="w-full flex items-center justify-center my-4">
            <motion.ul
              className="relative flex items-center justify-around rounded-full py-1 px-3 border-1 border-white floatingHeader"
              style={{ width, fontSize }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <NavItem showIcons={showIcons} />
              <motion.li
                className={`fixed bg-[var(--active)] font-semibold flex text-center rounded-full text-white  text-2xl py-1 mx-2`}
                initial={{ padding: "0px 20px" }}
                animate={{ padding: "5px 20px" }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/assets/images/icons/logo.png"
                  height={60}
                  width={60}
                  className="flex flex-1 p-2"
                  alt="logo"
                />
              </motion.li>
            </motion.ul>
          </div>
        </div>
      )}

      {sizeCheck() === "mobile" && <Sidebar />}
    </>
  );
};

export default Header;
