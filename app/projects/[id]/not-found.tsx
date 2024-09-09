import Link from "next/link";
import { H1 } from "@/app/components/ui/Headings";
import { ButtonVariants } from "@/app/components/ui/Button";

const notFound = () => {
  return (
    <div className="space-y-7">
      <div className="space-y-6 text-center">
        <H1>
          <span className="text-primary">Project</span> Not Found
        </H1>
        <p className="mx-auto max-w-[600px]">
          The project you&apos;re searching for doesn&apos;t exist or might
          have been removed. Explore other
          projects or return to the homepage.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3">
        <Link
          href={"/"}
          className={ButtonVariants({
            variant: "primary",
            className: "inline-block",
          })}
        >
          Homepage
        </Link>
        <Link
          href={"/projects"}
          className={ButtonVariants({
            variant: "secondary",
            className: "inline-block",
          })}
        >
          Browse Projects
        </Link>
      </div>
    </div>
  );
};
export default notFound;
