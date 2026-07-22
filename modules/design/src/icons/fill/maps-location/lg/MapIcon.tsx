import type { SVGProps } from "react";

export const MapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M17.5 37.7701L30.5 43.4576L30.5 10.2297L17.5 4.54224L17.5 37.7701Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M33.5 43.4865L33.5 10.3657L46 5.58105V38.7048L33.5 43.4865Z" fill="currentColor" />
      <path d="M14.5 4.51367L2 9.29535V42.4191L14.5 37.6344L14.5 4.51367Z" fill="currentColor" />
    </svg>
  );
};
