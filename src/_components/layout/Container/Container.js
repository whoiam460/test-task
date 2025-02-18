import React from "react";
import clsx from "clsx";

const containerBaseStyles = "p-4 xl:p-10";
const Container = ({ className, children }) => {
  const containerClasses = clsx(containerBaseStyles, className);
  return <div className={containerClasses}>{children}</div>;
};

export default Container;
