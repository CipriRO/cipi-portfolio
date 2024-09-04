import Link from "next/link";
import { PhotoShuffleProps } from "../ui/photo-shuffle/PhotoShuffle";
import PhotoShuffle from "../ui/photo-shuffle/PhotoShuffle";
import { H2, H4 } from "./Headings";
import { cn } from "@/app/lib/utils";

export type ProjectProps = Pick<
  PhotoShuffleProps,
  "images" | "imagePosition"
> & {
  title: string;
  description: string;
  variant: "mini" | "maxi";
  link: string;
};

const Project = ({
  title,
  description,
  link,
  variant,
  imagePosition,
  images,
}: ProjectProps) => {
  return (
    <Link
      href={link}
      className={cn("group inline-block", {
        "w-[411.8px]": variant === "mini",
        "w-full rounded-3xl p-2 hover:ring-2 ring-border transition-all": variant === "maxi",
      })}
    >
      <article>
        <PhotoShuffle
          variant={variant}
          imagePosition={imagePosition}
          images={images}
        />
        <div
          className={cn({
            "space-y-2": variant === "mini",
            "space-y-4 mt-4": variant === "maxi",
          })}
        >
          {variant === "mini" ? <H4>{title}</H4> : <H2>{title}</H2>}
          <p className="line-clamp-3 text-copy-light max-w-[600px]">{description}</p>
        </div>
      </article>
    </Link>
  );
};

export default Project;
