import Image from "next/image";
import MemojiImg from "@/public/logos/memoji.png";

const Memoji = () => {
  return (
    <div className="inline-block rounded-full bg-primary/30 p-3">
      <Image
        src={MemojiImg}
        alt="Image of Cipi Memoji"
        width={171}
        height={171}
      />
    </div>
  );
};
export default Memoji;
