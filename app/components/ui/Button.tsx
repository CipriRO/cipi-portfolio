import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof ButtonVariants> & {
    className?: string;
  };

const ButtonVariants = cva("rounded-full font-medium py-2 px-7", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-content",
      secondary: "bg-transparent text-copy ring-2 ring-copy",
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
