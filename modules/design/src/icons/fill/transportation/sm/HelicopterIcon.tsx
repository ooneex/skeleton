import type { SVGProps } from "react";

export const HelicopterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M15 17V23H13V17H15Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M19 17V23H17V17H19Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 2H21V4H4V2Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.9142 21L23.0858 21.8285C22.3356 22.5786 21.3182 23 20.2574 23H9V21H20.2574C20.7878 21 21.2965 20.7893 21.6716 20.4142L22.5 19.5858L23.9142 21Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.382 5L9.38197 7H3.72076L3.22076 5.5H0.381645L1.05323 11.4914H6.12783L9.55592 17.4884C10.09 18.4231 11.0841 19 12.1606 19H21C22.6569 19 24 17.6569 24 16V15C24 10.5817 20.4183 7 16 7H15.618L14.618 5H10.382ZM21.6586 13C20.8349 10.6696 18.6124 9 16 9H15.5L17.5 13H21.6586Z"
        fill="currentColor"
      />
    </svg>
  );
};
