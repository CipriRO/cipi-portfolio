import CtaButtons from "../ui/CtaButtons";
import { H1, H2, H4 } from "../ui/Headings";
import Memoji from "../ui/Memoji";

const Hero = () => {
  return (
    <section className="space-y-10 text-center">
      <Memoji />
      <div className="space-y-7">
        <H2 className="font-semibold">Hi. I&apos;m Ciprian🤘</H2>
        <H1 className="break-words">
          Building <span className="text-primary">High Performance</span> and{" "}
          <span className="text-primary">User-Friendly</span> web applications
        </H1>
        <H4 className="mx-auto max-w-[665px] font-normal">
          a <span className="font-bold">Frontend Developer</span> with a passion
          for <span className="font-bold">UI/UX design</span> from{" "}
          <span className="font-bold">Romania</span>
        </H4>
      </div>

      <CtaButtons />
    </section>
  );
};
export default Hero;
