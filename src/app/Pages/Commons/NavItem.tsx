"use client";
// import { headerItems } from "@/app/constants";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { headerItems } from "@/app/constants";
import Image from "next/image";
import { AnimatedImage } from "@/app/AnimatedComponents";

const NavItem = (props: { showIcons: boolean }) => {
  const [activeTab, setActiveTab] = useState<string>("Home");
  function clickHandler(tab: string) {
    setActiveTab(tab);
  }
  // console.log(activeTab);
  return (
    <>
      {headerItems.map((item, index) => {
        return (
          <motion.li
            key={index}
            className={`${
              activeTab == item?.text
                ? "!text-white bg-[var(--active)] !font-black "
                : "bg-transparent"
            } flex text-center py-1 rounded-full w-[35%] text-nowrap items-center justify-center hover:border-b-1 mx-1`}
            onClick={() => {
              if (item?.text) clickHandler(item?.text);
            }}
          >
            <Link
              href={item?.link || ""}
              className="flex flex-nowrap items-center gap-1 overflow-hidden font-semibold"
            >
              {props?.showIcons && item?.icon && (
                <AnimatedImage
                  initial={{
                    opacity: 0,
                    x: -50,
                    width: !props?.showIcons ? 0 : "",
                  }}
                  animate={{
                    opacity: props?.showIcons ? 1 : 0,
                    x: props?.showIcons && 0,
                    zIndex: props?.showIcons && 0,
                  }}
                  transition={{ duration: 0.5 }}
                  src={item?.icon}
                  height={20}
                  width={20}
                  alt=""
                  className="invert"
                />
              )}
              <div
                className={`${
                  activeTab == item?.text
                    ? "text-white"
                    : "text-[var(--themeColor1)]"
                }  `}
              >
                {item?.text}
              </div>
            </Link>
          </motion.li>
        );
      })}
    </>
  );
};

export default NavItem;
