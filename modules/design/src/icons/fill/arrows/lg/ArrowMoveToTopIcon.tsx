import type { SVGProps } from "react";

export const ArrowMoveToTopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M44 44H4V41H44V44Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 31H4V28H18V31Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 31H30V28H44V31Z" fill="currentColor" />
      <path
        d="M35.2426 15L24.1213 3.87866L13 15L15.1213 17.1213L22.6211 9.62153V37H25.6211V9.62108L33.1213 17.1213L35.2426 15Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
