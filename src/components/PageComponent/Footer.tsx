"use client"
import { abbyFooterLink, abbyName } from "@/data/abbyData/data"
import { useSwitch } from "../Context/SwitchContext"
import { profileFooterLink, profileName} from "@/data/ProfileData/data"

const Footer = () => {
  const { isSwitchOn } = useSwitch()
  const footerLinks = isSwitchOn ? abbyFooterLink : profileFooterLink
  return (
    <footer className="md:mb-12 mb-16">
      <div className=" border-t border-zinc-700 my-6" />
      <div className=" flex flex-col gap-2.5 items-center">
        <div className=" flex flex-wrap gap-4 items-center md:text-base text-sm">
          {footerLinks.map((link) => (
            <a
              key={link.id}
              className=" select-none md:text-base text-xl  hover:opacity-75 flex gap-1 items-center transition duration-100"
              target="_blank"
              href={link.link}
            >
              <link.icon /> <span className="hidden md:block">{link.name}</span>
            </a>
          ))}
        </div>
        <p className="text-sm ">
          © 2025 {isSwitchOn ? abbyName : profileName}. All rights reserved.
        </p>
        <p className="text-xs text-zinc-500">
          Template by{" "}
          <a
            href="https://rinkit.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition duration-100 underline"
          >
            damnGruz
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
