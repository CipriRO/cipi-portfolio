import Link from "next/link";
import { ButtonVariants } from "./Button";

const CtaButtons = () => {
  return (
    <div className="space-x-5">
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
