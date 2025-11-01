import { FaDiscord, FaLinkedinIn } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
// import { FaInstagram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si"
import { MdOutlineMail } from "react-icons/md"
import { SiBluesky } from "react-icons/si"

const profileImage = "/assets/Images/pfps/profile.jpg"
const profileName = "Parv Jain"
const profileShortName = "Parv"
const profileBio = "Building Okito - Next-gen Web3 Payments"
const profileAbout = `
  <p>
    Hey! I'm Parv Jain, an undergraduate computer science student and full-stack developer who loves turning ideas into real, working products.
  </p>
  <p>
    I'm currently working on <strong>Okito</strong> - a next-generation Web3 payment gateway and SDK built on Solana. My focus is on creating developer-friendly tools that make crypto payments as simple as traditional payment methods.
  </p>
  <p>
    I'm flexible working with any tech stack, though I prefer modern tools like Next.js, TypeScript, and Solana. I love contributing to open-source projects and building products that solve real-world problems.
  </p>
`

const profileLink = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/absterrg0/",
    icon: FaGithub,
  },

  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=notabbytwt",
    icon: FaXTwitter,
  },

  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/parv-jain-82169b297",
    icon: FaLinkedinIn,
  },

]

const profileContact =
  "Most of the time, you'll find me hanging out on my Discord channel while coding. I'm also super active on X, so feel free to DM me there or reach out to me via email if you have any queries."
const profileContactLink = [
  {
    id: 1,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnabby",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Discord",
    link: "https://discord.gg/JgcDzHpWum",
    icon: FaDiscord,
  },
  {
    id: 3,
    name: "Email",
    link: "mailto:parvj@abstergo.dev",
    icon: MdOutlineMail,
  },
]

const profileFooterLink = [
  {
    id: 1,
    name: "Mail",
    link: "mailto:parvj@abstergo.dev",
    icon: MdOutlineMail,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/absterrg0/",
    icon: FaGithub,
  },

  {
    id: 3,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=notabbytwt",
    icon: FaXTwitter,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/parv-jain-82169b297",
    icon: FaLinkedinIn,
  },

]

export {
  profileImage,
  profileBio,
  profileContact,
  profileContactLink,
  profileName,
  profileShortName,
  profileAbout,
  profileLink,
  profileFooterLink,
}
