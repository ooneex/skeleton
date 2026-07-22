import type { SVGProps } from "react";

export const HotDogIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M27.3468 10.3468L27.6716 10.6716C29.2337 12.2337 29.2337 14.7664 27.6716 16.3285L16.3284 27.6716C14.7663 29.2337 12.2337 29.2337 10.6716 27.6716L10.3469 27.3469"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M4.84689 21.8471L4.32841 21.3286C2.76632 19.7665 2.76631 17.2338 4.32839 15.6717L15.6716 4.32839C17.2337 2.76627 19.7664 2.76627 21.3285 4.32839L21.6531 4.65301"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M21.9803 4.50003L4.5 21.9803C2.97577 23.5045 2.97577 25.9758 4.5 27.5C6.02423 29.0243 8.49549 29.0243 10.0197 27.5L27.5 10.0197C29.0242 8.49552 29.0242 6.02426 27.5 4.50003C25.9757 2.9758 23.5045 2.9758 21.9803 4.50003Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M10 20V24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 14V18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M22 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
