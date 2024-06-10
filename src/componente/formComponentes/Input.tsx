"use client";
import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  placeholder?: string;
  mask?: string;
};

export default function Input({
  placeholder,
  className,
  mask,
  ...props
}: InputProps) {
  if (mask) {
    return (
      <div>
        <input
          {...props}
          className={`input ${className}`}
          placeholder={placeholder}
        />
      </div>
    );
  }

  return (
    <div>
      <input
        {...props}
        className={`input ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}
