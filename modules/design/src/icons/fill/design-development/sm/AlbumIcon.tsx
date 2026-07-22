import type { SVGProps } from "react";

export const AlbumIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M1 11H5.00004V13H1V11Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 5H5.00004V7H1V5Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 17H5.00004V19H1V17Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 22V2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H3ZM18 6H7V14H18V6Z"
        fill="currentColor"
      />
    </svg>
  );
};
