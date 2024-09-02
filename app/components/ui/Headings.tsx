import { cn } from "@/app/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const H1 = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"h1"> & { className?: string }) => {
  return (
    <h1 className={cn("text-[90px]", className)} {...props} />
  );
};
export const H2 = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"h2"> & { className?: string }) => {
  return (
    <h2 className={cn("text-[56px]", className)} {...props} />
  );
};
export const H3 = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"h3"> & { className?: string }) => {
  return (
    <h3 className={cn("text-[32px]", className)} {...props} />
  );
};
export const H4 = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"h4"> & { className?: string }) => {
  return (
    <h4 className={cn("text-[24px]", className)} {...props} />
  );
};
