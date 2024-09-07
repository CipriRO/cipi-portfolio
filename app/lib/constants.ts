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
  {
    name: "Upwork",
    icon: UpworkIcon,
    link: "https://www.upwork.com/freelancers/~01ec2d5c129012349e?mp_source=share",
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/cipi26",
  },
  { name: "Github", icon: GithubIcon, link: "https://github.com/CipriRO" },
  {
    name: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/cipi.26_/",
  },
  { name: "Mail", icon: MailIcon, link: "mailto:stefanciprian440@icloud.com" },
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

export type ProjectContentProps = { type: string; info: string | string[] };

type ProjectsProps = Omit<ProjectProps, "variant"> & {
  details: ProjectContentProps[];
  content: ProjectContentProps[];
};

export const projects: ProjectsProps[] = [
  {
    id: "848e7b6e-74d0-4426-ae54-f4645265d8b4",
    title: "Yumy",
    description:
      "Yumy is a social platform for food lovers to share and discover recipes. Yumy will offer personalized feeds, messaging, recipe sharing, and an intelligent recipe search system.",
    images: [
      "https://i.imgur.com/PG6KWZi.png",
      "https://i.imgur.com/pkE9zku.png",
      "https://i.imgur.com/xNZtzYg.png",
    ],
    imagePosition: "left",
    details: [
      { type: "Start date", info: "28 January 2024" },
      {
        type: "Technologies",
        info: ["Next.js", "Tailwind CSS", "MongoDB", "Mongoose"],
      },
      {
        type: "Features",
        info: [
          "Authentication System",
          "High Performance and Security",
          "Sign In with Google",
          "Original Design",
        ],
      },
    ],
    content: [
      {
        type: "About",
        info: `Yumy will be the go-to hub for food enthusiasts. Users will be able to create accounts, connect with others, and share their favorite recipes. The platform’s future will include AI-powered intelligent recipe search, integrated messaging, and personalized feeds to enhance user interactions. The smart search feature will allow users to find recipes based on their available ingredients, dietary restrictions, and more.`,
      },
      {
        type: "Plans",
        info: [
          "Recipe Upload System",
          "Complex Feed System powered by AI",
          "Intelligent Recipe Search powered by AI",
          "Real-Time Messaging Integration",
        ],
      },
    ],
  },
  {
    id: "d1970f6d-06ff-41d3-9791-76b205c45f95",
    title: "Cipi Labs",
    description:
      "Cipi Labs is a personal sandbox for experimenting with APIs, new technologies, and AI. It’s a space to test and innovate with integrations like OpenAI’s GPT API to create smarter and more interactive web experiences.",
    images: ["https://i.imgur.com/8krYAe5.png"],
    imagePosition: "center",
    details: [
      { type: "Start date", info: "28 January 2024" },
      {
        type: "Technologies",
        info: ["Typescript", "Next.js", "Tailwind CSS", "ChatGPT API"],
      },
      {
        type: "Features",
        info: [
          "Experimentation with various APIs and new Technologies",
          "Documented and open-source projects",
        ],
      },
    ],
    content: [
      {
        type: "About",
        info: `Cipi Labs is constantly evolving with new experimental features. One of the key features in development is language translation enhanced by ChatGPT. This feature will not only translate but also provide cultural context, synonyms, and help users better understand unfamiliar phrases. The lab is also exploring new AI-powered tools for content generation, image recognition, and API testing.`,
      },
      {
        type: "Plans",
        info: [
          "AI-Enhanced Language translation",
          "Workour and Diet planner",
          "Life Advice Chat",
        ],
      },
    ],
  },
  {
    id: "6808c827-a955-4a5e-8459-54534e9fadaa",
    title: "Cipi Weather",
    description:
      "Cipi Weather provides real-time weather updates and offers hourly and daily forecasts for up to three days. Powered by FreeWeather API, it delivers essential weather information in an intuitive format.",
    images: ["https://i.imgur.com/3TrTPYQ.png"],
    imagePosition: "right",
    details: [
      { type: "Start date", info: "28 January 2024" },
      {
        type: "Technologies",
        info: ["Next.js", "Tailwind CSS", "WeatherApi"],
      },
      {
        type: "Features",
        info: [
          "Real-time Weather",
          "Hourly and daily forecasts",
          "Responsive design",
        ],
      },
    ],
    content: [
      {
        type: "About",
        info: `This simple yet practical weather app focuses on delivering up-to-date weather data with hourly and daily forecasts for up to three days. Designed for fast and reliable access to weather updates, Cipi Weather adapts to both mobile and desktop users. Future enhancements include improving UI and layout, enhancing performance and live weather updates.`,
      },
      {
        type: "Plans",
        info: [
          "Enhanced UI for better Weather Insights",
          "Improved Performance and faster Data Retrieval",
          "Live Weather Data integration",
        ],
      },
    ],
  },
  {
    id: "fb298410-12fd-42b5-bf94-35bff4269f70",
    title: "Elias Construction",
    description:
      "Elias Construction's website provides a professional overview of the company’s services, project portfolio, and contact details.",
    images: ["https://i.imgur.com/DrsKYQL.png"],
    imagePosition: "left",
    details: [
      { type: "Start date", info: "28 January 2024" },
      {
        type: "Technologies",
        info: ["Vite", "React.js", "Tailwind CSS", "Framer Motion"],
      },
      {
        type: "Features",
        info: ["Animations", "Simple Design", "Service Descriptions"],
      },
    ],
    content: [
      {
        type: "About",
        info: `This website is an online business card for Elias Construction, highlighting their services in the construction industry. Currently showcasing basic contact info and services, the next phase will feature an expanded project portfolio.`,
      },
      {
        type: "Plans",
        info: [
          "Enhance Layout Design",
          "Showcase Projects System with Database Integration",
          "Performance Enhancements",
        ],
      },
    ],
  },
];
