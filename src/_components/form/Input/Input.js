import clsx from "clsx";
import { forwardRef } from "react";

const inputStyles = {
  base: "text-[16px] leading-[24px] font-normal p-3 rounded-xl w-full focus:outline-none bg-secondary-lighten-1 border solid border-secondary-lighten-1 focus:border-secondary-darken-1 ",
};

const wrapperStyles = {
  base: "block flex-1",
};

const Input = forwardRef(
  (
    {
      value,
      withoutPlaceholder = false,
      placeholder = "Enter text here ...",
      className = "",
      wrapperClassName = "",
      onClick,
      autoFocus,
      label,
      error,
      ...props
    },
    ref
  ) => {
    const inputClasses = clsx(inputStyles.base, className);
    const wrapperClasses = clsx(wrapperStyles.base, wrapperClassName);

    return (
      <label className={wrapperClasses}>
        <input
          autoFocus={autoFocus}
          ref={ref}
          className={inputClasses}
          placeholder={!withoutPlaceholder ? placeholder : undefined}
          value={value}
          {...props}
          onClick={onClick}
        />
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
