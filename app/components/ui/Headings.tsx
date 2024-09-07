import { cn } from "@/app/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const H1 = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"h1"> & { className?: string }) => {
  return (
    //text-[68px]
    <h1 className={cn("text-[clamp(48px,_7vw,_68px)]", className)} {...props} />
  );
};
export const H2 = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"h2"> & { className?: string }) => {
  return (
    //text-[48px]
    <h2
      className={cn("text-[clamp(40px,_5.5vw,_48px)]", className)}
      {...props}
    />
  );
};
export const H3 = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"h3"> & { className?: string }) => {
  return (
    //text-[32px]
    <h3
      className={cn("text-[clamp(28px,_3.5vw,_32px)]", className)}
      {...props}
    />
  );
};
export const H4 = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"h4"> & { className?: string }) => {
  return (
    //text-[clamp(20px,_3.5vw,_24px)]
    <h4 className={cn("text-[22px] sm:text-[26px]", className)} {...props} />
  );
};
