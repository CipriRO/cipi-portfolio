import Image from "next/image";
import CipiLogo from "@/public/logos/cipi.svg";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <header className="flex h-16 items-center justify-between">
      <Image src={CipiLogo} alt="Cipi logo" width={43.11} height={24} />

      <Nav />

      <div />
    </header>
  );
};
export default Navbar;
