import clsx from "clsx";
import { forwardRef } from "react";

const styles = {
  base: "px-4 text-white transition-all duration-500 ease-in-out flex items-center justify-center rounded-xl",
};

const variants = {
  white: {
    filled: "border border-white bg-white ",
    outlined: "border border-white !text-white hover:bg-white ",
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
    variant = "black",
    format = "filled",
    className,
    onClick,
    block,
    type = "button",
    ...rest
  },
  ref
) {
  const classes = clsx(
    styles.base,
    variants[variant][format],
    !!block && "w-full",
    className
  );

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
