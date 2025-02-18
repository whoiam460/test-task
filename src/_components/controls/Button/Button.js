import clsx from "clsx";
import { forwardRef } from "react";
import { FaSpinner } from "react-icons/fa";

const styles = {
  base: "px-4 text-white transition-all duration-500 ease-in-out flex items-center justify-center",
  shapes: {
    default: "rounded-xl py-3 px-3",
    circle: "rounded-full min-w-[24px] min-h-[24px]",
  },
};

const variants = {
  white: {
    filled: "border border-white bg-white !text-primary hover:border-primary",
    outlined:
      "border border-white !text-white hover:bg-white hover:!text-primary",
  },

  black: {
    filled: "bg-black text-white hover:opacity-80",
    outlined:
      "border border-black !text-black hover:bg-black hover:!text-white",
  },
};

const Button = forwardRef(function Button(
  {
    children,
    shape = "default",
    variant = "black",
    format = "filled",
    className,
    href,
    onClick,
    block,
    isLoading,
    gradient,
    type = "button",
    ...rest
  },
  ref
) {
  const isDisabled = variant === "disabled" || isLoading;

  const classes = clsx(
    styles.base,
    styles.shapes[shape],
    gradient && bgGradient,
    variants[variant][format],
    isDisabled && "cursor-not-allowed opacity-50",
    !!block && "w-full",
    className
  );

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      {...rest}
      ref={ref}
    >
      {isLoading && <FaSpinner className="mr-2 animate-spin" />}
      {children}
    </button>
  );
});

export default Button;
