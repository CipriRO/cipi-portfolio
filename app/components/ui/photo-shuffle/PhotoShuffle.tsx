import MaxiShuffle from "./MaxiShuffle";
import MiniShuffle from "./MiniShuffle";

export type PhotoShuffleProps = {
  images: [string, string?, string?];
  imagePosition?: "center" | "left" | "right" ,
  variant?: "mini" | "maxi";
  animation?: "onHover" | "none" | "always";
};

const PhotoShuffle = ({
  images,
  variant = "maxi",
  animation = "onHover",
  imagePosition = "center",
}: PhotoShuffleProps) => {
  return (
    <>
      {variant === "mini" ? (
        <MiniShuffle images={images} imagePosition={imagePosition} animation={animation} />
      ) : (
        <MaxiShuffle images={images} imagePosition={imagePosition} animation={animation} />
      )}
    </>
  );
};

export default PhotoShuffle;
