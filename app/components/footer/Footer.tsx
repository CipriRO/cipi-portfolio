import Image from "next/image";
import Nav from "../navbar/Nav";
import CtaButtons from "../ui/CtaButtons";
import { H3 } from "../ui/Headings";
import SocialLinks from "./SocialLinks";
import CipiLogo from "@/public/logos/cipi.svg"

const Footer = () => {
  return (
    <footer className="space-y-12 pb-6">
      <div className="flex items-center justify-between">
        <Nav />
        <SocialLinks />
      </div>

      <div className="flex items-center justify-between">
        <CTA />
        <Copyright />
      </div>
    </footer>
  );
};
export default Footer;

const CTA = () => (
  <article className="space-y-6">
    <H3>
      Interested in working together<span className="text-primary">?</span>
    </H3>
    <CtaButtons />
  </article>
);

const Copyright = () => (
  <div className="text-copy-light text-right">
    <p>
      <span className="mr-1">Made by</span>
      <Image className="inline-block" src={CipiLogo} alt="Cipi logo" width={32.33} height={18} />
    </p>
    <p>© 2024 All Rights Reserved.</p>
  </div>
);
