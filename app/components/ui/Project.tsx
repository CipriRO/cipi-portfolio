import Link from "next/link";
import { PhotoShuffleProps } from "../ui/photo-shuffle/PhotoShuffle";
import PhotoShuffle from "../ui/photo-shuffle/PhotoShuffle";
import { H2, H4 } from "./Headings";
import { cn } from "@/app/lib/utils";

export type ProjectProps = Pick<
  PhotoShuffleProps,
  "images" | "imagePosition"
> & {
  id: string;
  title: string;
  description: string;
  variant: "mini" | "maxi";
};

const Project = ({
  id,
  title,
  description,
  variant,
  imagePosition,
  images,
}: ProjectProps) => {
  return (
    <Link
      href={`/projects/${id}`}
      className={cn("group inline-block", {
        "w-[411.8px]": variant === "mini",
        "w-full rounded-3xl p-2 ring-border transition-all hover:ring-2":
          variant === "maxi",
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
            "mt-4 space-y-4": variant === "maxi",
          })}
        >
          {variant === "mini" ? <H4>{title}</H4> : <H2>{title}</H2>}
          <p className="line-clamp-3 max-w-[600px] text-copy-light">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Project;
