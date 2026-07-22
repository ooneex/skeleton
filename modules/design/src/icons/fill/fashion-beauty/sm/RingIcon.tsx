import type { SVGProps } from "react";

export const RingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 4.7998V2.5957L10.0391 1H13.9609L17 2.5957V4.7998L16.7246 5.08984L14.2246 7.71484L12 7L9.77539 7.71484L7.27539 5.08984L7 4.7998Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M18.5 14.5C18.5 10.9101 15.5899 8 12 8C8.41015 8 5.5 10.9101 5.5 14.5C5.5 18.0899 8.41015 21 12 21C15.5899 21 18.5 18.0899 18.5 14.5ZM20.5 14.5C20.5 19.1944 16.6944 23 12 23C7.30558 23 3.5 19.1944 3.5 14.5C3.5 9.80558 7.30558 6 12 6C16.6944 6 20.5 9.80558 20.5 14.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
