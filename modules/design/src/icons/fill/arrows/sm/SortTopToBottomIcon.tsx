import type { SVGProps } from "react";

export const SortTopToBottomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M14 5H22V3H14V5Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 12H22V10H14V12Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 19H22V17H14V19Z" fill="currentColor" data-color="color-2" />
      <path
        d="M8.59582 18.99C4.36534 18.7795 1 15.2827 1 11C1 6.58172 4.58172 3 9 3H11V5H9C5.68629 5 3 7.68629 3 11C3 14.1694 5.45737 16.7648 8.57072 16.9849L6.58582 15L8.00003 13.5858L12.4142 18L8.00003 22.4142L6.58582 21L8.59582 18.99Z"
        fill="currentColor"
      />
    </svg>
  );
};
