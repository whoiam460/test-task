"use client";

import React from "react";
import clsx from "clsx";

const List = ({ items, children, className, onClick }) => {
  const listClasses = clsx("grid grid-cols-12 w-full gap-4", className);

  return (
    <ul className={listClasses}>
      {items?.map((item, index) => (
        <li key={item?.id} className="col-span-12 md:col-span-6 xl:col-span-4">
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
