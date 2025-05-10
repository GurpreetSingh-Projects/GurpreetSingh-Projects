"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { headerItems } from "@/app/constants";
import { AnimatedImage } from "@/app/AnimatedComponents";

const NavItem = (props: { showIcons: boolean }) => {
  const [activeTab, setActiveTab] = useState<string>("Home");
  function clickHandler(tab: string) {
    setActiveTab(tab);
  }
  return (
    <>
      {headerItems.map((item, index) => {
        return (
          <motion.li
            key={index}
            className={`${
              activeTab == item?.text
                ? "!text-white bg-[var(--active)] !font-black"
                : "bg-transparent"
            } flex text-center py-1.5 rounded-full w-[35%] text-md text-nowrap items-center justify-center hover:border-b-1 mx-1  scale-105`}
            onClick={() => {
              if (item?.text) clickHandler(item?.text);
            }}
          >
            <Link
              href={item?.link || ""}
              className="flex flex-nowrap items-center gap-2 overflow-hidden font-semibold"
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
                  height={17.5}
                  width={17.5}
                  alt=""
                  className="invert"
                />
              )}
              <div
                className={`${
                  activeTab == item?.text
                    ? "text-white"
                    : "text-black font-semibold"
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
