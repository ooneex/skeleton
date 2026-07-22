import type { SVGProps } from "react";

export const GunBanIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M3.6099 3.5889L2.70752 7.17508C2.57489 7.70218 2.6625 8.26055 2.95018 8.7217L4.23795 10.786L2.12998 17.0704C1.93328 17.6568 2.01896 18.3012 2.36205 18.8158L3.81816 21H8.31816L11.3814 11.3075"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M13 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M21.5 21.5L2.5 2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M9.5 4H23V10H20L19 11H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
