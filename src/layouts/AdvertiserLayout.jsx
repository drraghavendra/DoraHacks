import React, { useState } from 'react'
import { Sidebar, SidebarBody, SidebarLink } from "../components/Sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconPlus
} from "@tabler/icons-react";
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const AdvertiserLayout = ({ children }) => {
    const links = [
        {
            label: "Dashboard",
            href: "/advertiser/dashboard",
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Create Ad",
            href: "/advertiser/create-ad",
            icon: (
                <IconPlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Profile",
            href: "/advertiser/profile",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Settings",
            href: "/advertiser/settings",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Logout",
            href: "/",
            icon: (
                <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);
  return (
    <div
        className={cn(
            "flex flex-col md:flex-row bg-gray-100 dark:bg-gray-200 flex-1 w-screen overflow-hidden",
            "h-screen"
        )}
    >
        <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
                <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {open ? <Logo /> : <LogoIcon />}
                <div className="mt-8 flex flex-col gap-2">
                    {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link} />
                    ))}
                </div>
                </div>
                <div>
                <SidebarLink
                    link={{
                    label: "Voicenotes",
                    href: "#",
                    icon: (
                        <img
                        src="https://play-lh.googleusercontent.com/VLEjDAenZZR2L9S5-CSzwwM0cFGP_o_9Yu2dl5S9JZbQq0SnBcu-rTywZTV2byigYaE=w240-h480-rw"
                        className="h-7 w-7 flex-shrink-0 rounded-full"
                        width={50}
                        height={50}
                        alt="Avatar"
                        />
                    ),
                    }}
                />
                </div>
            </SidebarBody>
        </Sidebar>
        {children}
    </div>
  )
}

export default AdvertiserLayout

export const Logo = () => {
    return (
      <Link
        to="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium text-black dark:text-white whitespace-pre"
        >
          DeAds
        </motion.span>
      </Link>
    );
};

export const LogoIcon = () => {
    return (
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      </Link>
    );
};