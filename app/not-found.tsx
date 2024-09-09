import Link from "next/link";
import { H1 } from "./components/ui/Headings";
import { ButtonVariants } from "./components/ui/Button";

const notFound = () => {
  return (
    <div className="space-y-7">
      <div className="space-y-6 text-center">
        <H1>
          <span className="text-primary">Oops!</span> Page Not Found
        </H1>
        <p className="max-w-[600px] mx-auto">
          It seems the page you&apos;re looking for doesn&apos;t exist, may have
          been deleted, or moved to a new location. Please check the URL or return
          to the homepage.
        </p>
      </div>

      <div className="flex justify-center gap-3">
        <Link href={"/"} className={ButtonVariants({variant: "primary", className: "inline-block mx-auto"})}>Homepage</Link>
      </div>
    </div>
  );
};
export default notFound;
