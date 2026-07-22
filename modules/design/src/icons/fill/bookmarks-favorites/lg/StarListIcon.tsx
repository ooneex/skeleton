import type { SVGProps } from "react";

export const StarListIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M27 38H44V41H27V38Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M27 30H44V33H27V30Z" fill="currentColor" data-color="color-2" />
      <path
        d="M30.5339 15.9337L24 2.74768L17.4661 15.9337L2.84521 18.0508L13.4251 28.3236L10.9294 42.8244L24 36V29.5C24 28.1193 25.1193 27 26.5 27H35.9381L45.1548 18.0508L30.5339 15.9337Z"
        fill="currentColor"
      />
    </svg>
  );
};
