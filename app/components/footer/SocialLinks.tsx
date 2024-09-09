import { SocialMediaLinks } from "@/app/lib/constants";
import Image from "next/image";
import Link from "next/link";

const SocialLinks = ({ variant = "mini" }: { variant?: "mini" | "normal" }) => {
  return <>{variant === "mini" ? <MiniSocial /> : <ExpandSocial />}</>;
};
export default SocialLinks;

export const MiniSocial = () => {
  return (
    <div className="flex items-center gap-6">
      {SocialMediaLinks.map((link, id) => (
        <Link key={id} href={link.link} target="_blank">
          <Image
            src={link.icon}
            alt={link.name + " icon"}
            width={24}
            height={24}
            className="hover:opacity-80"
          />
        </Link>
      ))}
    </div>
  );
};

export const ExpandSocial = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-5">
      {SocialMediaLinks.map((link, id) => (
        <Link
          key={id}
          href={link.link}
          target="_blank"
          className="flex items-center gap-1 rounded-full px-3 py-1 shadow-inner ring-1 ring-copy-lighter/30 transition-colors hover:bg-border font-medium"
        >
          <Image
            src={link.icon}
            alt={link.name + " icon"}
            width={24}
            height={24}
            className="inline-block"
          />
          {link.name}
        </Link>
      ))}
    </div>
  );
};
