import clsx from "clsx";

const styles = {
  levels: {
    1: "text-[48px] leading-[4rem]",
    2: "text-[40px] leading-[3.25rem]",
    3: "text-[32px] leading-[2.75rem]",
    4: "text-[24px] leading-8",
  },
  variants: {
    black: "!text-black",
    white: "text-white",
  },
  weights: {
    bold: "font-bold",
    semiBold: "font-semibold",
    medium: "font-medium",
    normal: "font-normal",
    light: "font-light",
  },
};

const Title = ({
  level = 1,
  variant = "black",
  weight = "normal",
  children,
  className = "",
}) => {
  const TitleTag = `h${level}`;

  const classes = clsx(
    "leading-none",
    styles.levels[level],
    styles.variants[variant],
    styles.weights[weight],
    className
  );

  return <TitleTag className={classes}>{children}</TitleTag>;
};

export default Title;
