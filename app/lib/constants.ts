import GithubIcon from "@/public/logos/github.svg";
import InstagramIcon from "@/public/logos/instagram.svg";
import LinkedInIcon from "@/public/logos/linkedin.svg";
import UpworkIcon from "@/public/logos/upwork.svg";
import MailIcon from "@/public/logos/mail.svg";
import { ProjectProps } from "../components/ui/Project";
import { SkillProps } from "../components/home/Skills";

export const links = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
] as const;

export const SocialMediaLinks = [
  { name: "Upwork", icon: UpworkIcon, link: "" },
  { name: "LinkedIn", icon: LinkedInIcon, link: "" },
  { name: "Github", icon: GithubIcon, link: "" },
  { name: "Instagram", icon: InstagramIcon, link: "" },
  { name: "Mail", icon: MailIcon, link: "" },
] as const;

export const skills: SkillProps[] = [
  {
    title: "Frontend",
    contents: [
      "CSS3",
      "Javascript",
      "Typescript",
      "React.js",
      "TailwindCSS",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    contents: ["Next.js serverless functions", "Mongodb", "Mongoose"],
  },
  {
    title: "Soft Skills",
    contents: [
      "Communication",
      "Problem-Solving",
      "Adaptability",
      "Attention to Detail",
    ],
  },
  {
    title: "Other Skills",
    contents: ["Responsive Design", "Git", "RESTful APIs"],
  },
];

export const projects: ProjectProps[] = [
  {
    title: "Yumy",
    link: "/yumy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet rutrum turpis, et efficitur nulla.",
    images: [
      "https://i.imgur.com/PG6KWZi.png",
      "https://i.imgur.com/pkE9zku.png",
      "https://i.imgur.com/xNZtzYg.png",
    ],
    imagePosition: "left",
  },
  {
    title: "Cipi Labs",
    link: "/cipi-labs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet rutrum turpis, et efficitur nulla.",
    images: ["https://i.imgur.com/8krYAe5.png"],
    imagePosition: "center",
  },
  {
    title: "Cipi Weather",
    link: "/cipi-weather",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet rutrum turpis, et efficitur nulla.",
    images: ["https://i.imgur.com/3TrTPYQ.png"],
    imagePosition: "left",
  },
  {
    title: "Elias Construction",
    link: "/elias-construction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet rutrum turpis, et efficitur nulla.",
    images: ["https://i.imgur.com/DrsKYQL.png"],
    imagePosition: "left",
  },
];
