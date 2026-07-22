import type { SVGProps } from "react";

export const DoorOpenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M31 4H41V44H31V4Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 46.5993V2.17075L7 6.17256V41.7971L28 46.5993ZM20 23V31H23V26H25V23H20Z"
        fill="currentColor"
      />
    </svg>
  );
};
