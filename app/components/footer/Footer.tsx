import Image from "next/image";
import Nav from "../navbar/Nav";
import CtaButtons from "../ui/CtaButtons";
import { H3 } from "../ui/Headings";
import SocialLinks from "./SocialLinks";
import CipiLogo from "@/public/logos/cipi.svg"

const Footer = () => {
  return (
    <footer className="space-y-14 md:space-y-12 pb-6 mt-36">
      <div className="flex items-center justify-around lg:justify-between flex-wrap gap-x-12 gap-y-5">
        <Nav />
        <SocialLinks />
      </div>

      <div className="flex items-center justify-around lg:justify-between flex-wrap gap-10">
        <CTA />
        <Copyright />
      </div>
    </footer>
  );
};
export default Footer;

const CTA = () => (
  <article className="space-y-6 min-w-[280px]">
    <H3 className="text-center lg:text-left">
      Interested in working together<span className="text-primary">?</span>
    </H3>
    <CtaButtons className="lg:justify-start justify-center" />
  </article>
);

const Copyright = () => (
  <div className="text-copy-light text-center lg:text-right">
    <p>
      <span className="mr-1">Made by</span>
      <Image className="inline-block" src={CipiLogo} alt="Cipi logo" width={32.33} height={18} />
    </p>
    <p>© 2024 All Rights Reserved.</p>
  </div>
);
