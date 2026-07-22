import type { SVGProps } from "react";

export const ParkingSignIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M26.5 25H20V16H26.5C28.9853 16 31 18.0147 31 20.5C31 22.9853 28.9853 25 26.5 25Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 4C41.3137 4 44 6.68629 44 10V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V10C4 6.68629 6.68629 4 10 4H38ZM17 13V36H20V28H26.5C30.6421 28 34 24.6421 34 20.5C34 16.3579 30.6421 13 26.5 13H17Z"
        fill="currentColor"
      />
    </svg>
  );
};
