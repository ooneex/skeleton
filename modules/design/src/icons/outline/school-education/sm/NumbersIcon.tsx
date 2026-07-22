import type { SVGProps } from "react";

export const NumbersIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21 19H12V18V18C12 16.7863 12.7222 15.689 13.837 15.2091L18.4024 13.2434C19.9787 12.5647 21 11.0131 21 9.29684V9.29684C21 6.92376 19.0762 5 16.7032 5H16C13.7909 5 12 6.79086 12 9V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M7 19V5H6L2 8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
