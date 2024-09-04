import Link from "next/link";
import { PhotoShuffleProps } from "../ui/photo-shuffle/PhotoShuffle";
import PhotoShuffle from "../ui/photo-shuffle/PhotoShuffle";
import { H4 } from "./Headings";

export type ProjectProps = Pick<PhotoShuffleProps, "images" | "imagePosition"> & {
  title: string;
  description: string;
  link: string;
};

const Project = ({
  title,
  description,
  link,
  imagePosition,
  images,
}: ProjectProps) => {
  return (
    <Link href={link} className="group inline-block w-[411.8px]">
      <article>
        <PhotoShuffle
          variant="mini"
          imagePosition={imagePosition}
          images={images}
        />
        <div className="space-y-2">
          <H4>{title}</H4>
          <p className="line-clamp-3">{description}</p>
        </div>
      </article>
    </Link>
  );
};

export default Project