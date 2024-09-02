import { SocialMediaLinks } from "@/app/lib/constants";
import Image from "next/image";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {SocialMediaLinks.map((link, id) => (
        <Link key={id} href={link.link}>
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
export default SocialLinks;
