import type { SVGProps } from "react";

export const CursorGrabIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 18.7499V24.8332C6 25.9662 6.38478 27.0656 7.09131 27.9513L14.6087 37.3749V41.9999H38.8696L41.2716 17.7498C41.6829 13.5974 38.8335 9.82621 34.7267 9.08755L17.8851 6.05841C14.8186 5.50687 12 7.86377 12 10.9794V21.9999H11L10.5 14.2499C8.01472 14.2499 6 16.2646 6 18.7499ZM24 22.9999V29.9999H21V22.9999H24ZM31 22.9999H28V29.9999H31V22.9999Z"
        fill="currentColor"
      />
    </svg>
  );
};
