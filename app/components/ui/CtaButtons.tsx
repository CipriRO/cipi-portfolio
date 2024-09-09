import Link from "next/link";
import { ButtonVariants } from "./Button";
import { ClassValue } from "clsx";
import { cn } from "@/app/lib/utils";

const CtaButtons = ({ className }: { className?: ClassValue }) => {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-5", className)}>
      <Link href="/contact" className={ButtonVariants()}>
        Get In Touch
      </Link>
      <Link
        href="/projects"
        className={ButtonVariants({ variant: "secondary" })}
      >
        Browse Projects
      </Link>
    </div>
  );
};
export default CtaButtons;
