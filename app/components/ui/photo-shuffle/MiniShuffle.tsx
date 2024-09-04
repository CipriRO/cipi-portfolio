import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { PhotoShuffleProps } from "./PhotoShuffle";

const MiniShuffle = ({
  animation,
  images,
  imagePosition,
}: Pick<PhotoShuffleProps, "animation" | "images" | "imagePosition">) => {
  const LastPhotoClass = cn(
    "absolute left-5 top-6 h-[260px] w-[336px] origin-bottom-left rounded-3xl transition-transform",
    {
      "rotate-[-4.44deg] group-hover:rotate-[-9deg]": animation === "onHover",
      "rotate-[-4.44deg]": animation === "none",
      "rotate-[-9deg]": animation === "always",
    },
  );

  const MiddlePhotoClass = cn(
    "absolute left-9 top-3 h-[260px] w-[336px] rounded-3xl transition-transform",
    {
      "group-hover:-translate-y-4": animation === "onHover",
      "-translate-y-4": animation === "always",
    },
  );

  const FirstPhotoClass = cn(
    "absolute bottom-4 right-5 h-[260px] w-[336px] origin-bottom-right rounded-3xl transition-transform",
    {
      "rotate-[4.44deg] group-hover:rotate-[9deg]": animation === "onHover",
      "rotate-[4.44deg]": animation === "none",
      "rotate-[9deg]": animation === "always",
    },
  );

  return (
    <div className="relative h-[300.8px] w-full">
      {/* last image */}
      {images[2] ? (
        <Image
          src={images[2]}
          alt=""
          width={600}
          height={260}
          className={cn(
            LastPhotoClass,
            "image-shadow object-cover object-center",
          )}
        />
      ) : (
        <div
          className={cn(LastPhotoClass, "image-shadow", {
            "bg-copy-lighter": !images[1],
            "bg-border": images[1],
          })}
        />
      )}

      {/* middle image */}
      {images[1] ? (
        <Image
          src={images[1]}
          alt=""
          width={600}
          height={260}
          className={cn(
            MiddlePhotoClass,
            "image-shadow object-cover object-center",
          )}
        />
      ) : (
        <div className={cn(MiddlePhotoClass, "image-shadow bg-border")} />
      )}

      {/* first image */}
      <Image
        src={images[0]}
        alt=""
        width={700}
        quality={100}
        height={360}
        className={cn(FirstPhotoClass, "image-shadow object-cover", {
          "object-center": imagePosition === "center",
          "object-left": imagePosition === "left",
          "object-right": imagePosition === "right",
        })}
      />
    </div>
  );
};

export default MiniShuffle;
