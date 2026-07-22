import type { SVGProps } from "react";

export const DrawCompassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 18V26H15V18H17Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 0V5.00004H15V0H17Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 21H29V23H3V21Z" fill="currentColor" />
      <path
        d="M16 12.5C18.4853 12.5 20.5 10.4853 20.5 8C20.5 5.51472 18.4853 3.5 16 3.5C13.5147 3.5 11.5 5.51472 11.5 8C11.5 10.4853 13.5147 12.5 16 12.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M11.5249 12.7141L2.65845 30.4471L4.4473 31.3415L13.1873 13.8615C12.5735 13.5664 12.0132 13.1778 11.5249 12.7141Z"
        fill="currentColor"
      />
      <path
        d="M18.8127 13.8615L27.5527 31.3415L29.3416 30.4471L20.4751 12.7141C19.9868 13.1778 19.4265 13.5664 18.8127 13.8615Z"
        fill="currentColor"
      />
    </svg>
  );
};
