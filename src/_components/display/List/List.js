"use client";

import React from "react";
import clsx from "clsx";

const List = ({ items, children, className, onClick }) => {
  const listClasses = clsx("flex flex-col w-full gap-y-4", className);

  return (
    <ul className={listClasses}>
      {items?.map((item, index) => (
        <li key={item?.id}>
          {React.cloneElement(children, {
            ...item,
            index,
            onClick: () => onClick?.(item),
          })}
        </li>
      ))}
    </ul>
  );
};

export default List;
