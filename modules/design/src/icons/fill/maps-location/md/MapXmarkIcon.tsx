import type { SVGProps } from "react";

export const MapXmarkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 2.31592L1 5.81592V28.9618L10 25.4618V2.31592Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 17.5857L31.4142 28.9999L30 30.4141L18.5858 18.9999L20 17.5857Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4142 18.9999L20 30.4141L18.5858 28.9999L30 17.5857L31.4142 18.9999Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M12 25.6179L16.8335 28.0347C16.9223 27.8736 17.035 27.7222 17.1716 27.5857L20 24.7572V23.2425L17.1716 20.4141C16.7965 20.039 16.5858 19.5303 16.5858 18.9999C16.5858 18.4694 16.7965 17.9607 17.1716 17.5857L18.5858 16.1714C18.9609 15.7964 19.4696 15.5857 20 15.5857L20 6.38184L12 2.38184V25.6179Z"
        fill="currentColor"
      />
      <path
        d="M25 19.7573L28.5858 16.1715C29.2401 15.5171 30.2351 15.411 31 15.8531V3.03809L22 6.53808V16.7573L25 19.7573Z"
        fill="currentColor"
      />
    </svg>
  );
};
