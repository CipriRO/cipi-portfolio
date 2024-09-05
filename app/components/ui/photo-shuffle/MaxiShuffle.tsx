import Image from "next/image";
import { PhotoShuffleProps } from "./PhotoShuffle";
import { cn } from "@/app/lib/utils";

const imageClass = "image-shadow rounded-2xl";

const MaxiShuffle = ({ images }: Pick<PhotoShuffleProps, "images">) => {
  return (
    <div className="flex items-center justify-center overflow-hidden rounded-3xl bg-[url('/project-background.svg')]  py-9 shadow-[0_2px_50px_rgba(0,_0,_0,_0.35)]">
      {images.length === 1 ? (
        <OneImage images={images} />
      ) : images.length === 2 ? (
        <TwoImages images={images} />
      ) : (
        <ThreeImages images={images} />
      )}
    </div>
  );
};
export default MaxiShuffle;

export const OneImage = ({ images }: Pick<PhotoShuffleProps, "images">) => {
  return (
    <div className="relative mx-2 h-[383.43px] w-full">
      <Image
        src={images[0]}
        alt=""
        width={800}
        height={460.43}
        quality={100}
        className={cn(imageClass, "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2")}
      />
    </div>
  );
};

export const TwoImages = ({ images }: Pick<PhotoShuffleProps, "images">) => {
  if (!images[1]) return;

  return (
    <div className="relative mx-2 h-[423.43px] w-full">
      <Image
        src={images[0]}
        alt=""
        width={800}
        height={460.43}
        quality={100}
        className={cn(imageClass, "absolute bottom-0 left-0")}
      />
      <Image
        src={images[1]}
        alt=""
        width={800}
        height={460.43}
        quality={100}
        className={cn(imageClass, "absolute right-0 top-0")}
      />
    </div>
  );
};

export const ThreeImages = ({ images }: Pick<PhotoShuffleProps, "images">) => {
  if (!images[1] || !images[2]) return;

  return (
    <div className="relative mx-2 h-[453.43px] w-full">
      <Image
        src={images[0]}
        alt=""
        width={800}
        height={460.43}
        quality={100}
        className={cn(imageClass, "absolute bottom-0 left-0")}
      />
      <Image
        src={images[2]}
        alt=""
        width={800}
        height={460.43}
        quality={100}
        className={cn(imageClass, "absolute right-0 top-1/2 -translate-y-1/2")}
      />
      <Image
        src={images[1]}
        alt=""
        width={800}
        height={460.43}
        quality={100}
        className={cn(imageClass, "absolute right-1/2 top-0 translate-x-1/2")}
      />
    </div>
  );
};
