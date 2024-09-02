import CtaButtons from "../ui/CtaButtons";
import { H1, H2, H4 } from "../ui/Headings";
import Memoji from "../ui/Memoji";

const Hero = () => {
  return (
    <section className="space-y-9 text-center">
      <Memoji />
      <H2 className="text-[40px] font-semibold">Hi. I&apos;m Ciprian 🤘</H2>

      <H1>
        Building <span className="text-primary">High Performance</span> and{" "}
        <span className="text-primary">User-Friendly</span> web applications
      </H1>

      <H4 className="mx-auto max-w-[665px] font-normal">
        a <span className="font-bold">Frontend Developer</span> with a passion
        for <span className="font-bold">UI/UX design</span> from{" "}
        <span className="font-bold">Romania</span>
      </H4>

      <CtaButtons />
    </section>
  );
};
export default Hero;
