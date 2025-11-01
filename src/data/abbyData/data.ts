import { SiBuymeacoffee } from "react-icons/si"
import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6"

const abbyImage = "/assets/Images/pfps/profile.jpg"
const abbyName = "Abby"
const abbyAbout = `
  <p>
    Hey, I'm Abby, a full-stack developer with OCPD. I love building things that people genuinely use and love.
  </p>
  <p>
    Besides programming, I'm passionate about football and video games. I also love music and movies - they're a huge part of my life and inspiration. When I'm not coding, you'll find me playing FIFA, watching football matches, or discovering new music and films.
  </p>
  <p>
    If you have an idea and would like to collaborate, feel free to DM me! I'm always open and ready to connect and work on exciting projects. Also, be sure to check out my other side, just click on the navbar image!
  </p>
`

const abbyBio = "Words and ideas can change the world"

const abbyLink = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/absterrg0",
    icon: FaGithub,
  },

  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnabby",
    icon: FaXTwitter,
  },
]

const abbyFooterLink = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/absterrg0",
    icon: FaGithub,
  },

  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=notabbytwt",
    icon: FaXTwitter,
  },
]

const abbyContact =
  "Most of the time, you'll find me hanging out on my Discord channel while coding. I'm also super active on X, so feel free to DM me there!"
const abbyContactLink = [
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
]

export {
  abbyName,
  abbyBio,
  abbyImage,
  abbyLink,
  abbyFooterLink,
  abbyAbout,
  abbyContact,
  abbyContactLink,
}
