import clsx from "clsx";

const styles = {
  levels: {
    1: "text-[20px] leading-7",
    2: "text-[18px] leading-6",
    3: "text-[16px] leading-6",
    4: "text-[14px] leading-5",
  },
  variants: {
    black: "text-black",
    white: "text-white",
  },
  weight: {
    bold: "font-bold",
    semiBold: "font-semibold",
    medium: "font-medium",
    normal: "font-normal",
    light: "font-light",
  },
};

const Text = ({
  tag: HTMLTag = "span",
  level = 1,
  variant = "black",
  weight = "normal",
  children,
  className = "",
  onClick,
}) => {
  const classes = clsx(
    "inline-block",
    styles.levels[level],
    styles.variants[variant],
    styles.weight[weight],
    className
  );

  return (
    <HTMLTag className={classes} onClick={onClick}>
      {children}
    </HTMLTag>
  );
};

export default Text;
