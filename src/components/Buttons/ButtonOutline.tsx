import React from 'react';

export default function ButtonOutline(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      {...props}
      className="btn btn-outline flex items-center gap-2 first:hover:text-white w-full sm:w-fit"
    />
  );
}
