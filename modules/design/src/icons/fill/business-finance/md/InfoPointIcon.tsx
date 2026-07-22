import type { SVGProps } from "react";

export const InfoPointIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 8.5C18.2091 8.5 20 6.70914 20 4.5C20 2.29086 18.2091 0.5 16 0.5C13.7909 0.5 12 2.29086 12 4.5C12 6.70914 13.7909 8.5 16 8.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M3 17V19H6V31H26V19H29V17H3Z" fill="currentColor" />
      <path
        d="M23.4185 15C22.2317 12.0682 19.3574 10 16 10C12.6426 10 9.76832 12.0682 8.58154 15H23.4185Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
