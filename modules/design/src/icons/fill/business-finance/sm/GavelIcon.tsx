import type { SVGProps } from "react";

export const GavelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 8.58578L23.4142 15L22 16.4142L15.5858 10L17 8.58578Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M7.80763 9.29292L13.4645 14.9498L21.9497 6.46449L16.2929 0.807648L7.80763 9.29292Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 13H5V15H1V13Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 7.08578L6.41421 10L5 11.4142L2.08578 8.5L3.5 7.08578Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M17 22H10H3V17H17V22Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 21H19V23H1V21Z" fill="currentColor" />
    </svg>
  );
};
