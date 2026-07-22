import type { SVGProps } from "react";

export const CalendarDayViewIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 13H46V35H2V13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 39H46V42H2V39Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 6H46V9H2V6Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
