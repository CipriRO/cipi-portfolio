import GithubIcon from "@/public/logos/github.svg";
import InstagramIcon from "@/public/logos/instagram.svg";
import LinkedInIcon from "@/public/logos/linkedin.svg";
import UpworkIcon from "@/public/logos/upwork.svg";
import MailIcon from "@/public/logos/mail.svg";

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
