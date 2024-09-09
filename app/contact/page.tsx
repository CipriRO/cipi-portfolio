import SocialLinks from "../components/footer/SocialLinks";
import { H1, H4 } from "../components/ui/Headings";
import Memoji from "../components/ui/Memoji";

const page = () => {
  return (
    <main className="flex flex-col items-center text-center">
      <Memoji />
      <H1 className="mb-7 mt-4">
        Let&apos;s Connect<span className="text-primary">!</span>
      </H1>
      <H4 className="font-medium mb-11">Looking to partner or work together? Reach out using the links below and I’ll get back to you in the next 24 hours.</H4>
      <SocialLinks variant="normal" />
    </main>
  );
};
export default page;
