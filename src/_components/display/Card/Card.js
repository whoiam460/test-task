import React from "react";
import clsx from "clsx";

const cardBaseStyles = "p-4 gap-x-4 bg-white rounded-xl";

const Card = ({ className, children, ...rest }) => {
  const cardClasses = clsx(cardBaseStyles, className);

  return (
    <div {...rest} className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;
