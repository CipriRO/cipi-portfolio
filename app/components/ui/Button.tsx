import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof ButtonVariants>;

export const ButtonVariants = cva("rounded-full font-medium py-2 px-7", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-content hover:bg-primary-dark transition-colors",
      secondary: "bg-transparent text-copy border-2 border-copy hover:bg-border transition-colors",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button className={ButtonVariants({ className, variant })} {...props} />
  );
};
export default Button;
