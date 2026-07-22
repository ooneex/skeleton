import type { SVGProps } from "react";

export const RawImageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M1 20H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M1 4L23 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M8.5 14H13" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M8.07832 15.5H8L10 8.5L11.5 8.5L13.5 15.5H13.4148"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3.5 12.5L4.33205 11.9453L4.03518 11.5H3.5V12.5ZM5.5 15.5V16.5H7.36852L6.33205 14.9453L5.5 15.5ZM5.34037 14.5H4.34037V16.5H5.34037V14.5ZM2.5 13.5H3.5V11.5H2.5V13.5ZM2.66795 13.0547L4.66795 16.0547L6.33205 14.9453L4.33205 11.9453L2.66795 13.0547ZM5.5 14.5H5.34037V16.5H5.5V14.5Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M1 15.5V8.5H3.5C4.60457 8.5 5.5 9.39543 5.5 10.5V10.5C5.5 11.6046 4.60457 12.5 3.5 12.5H1.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15.5692 8.5H15.5L16 15.5H17L19 11.5L21 15.5H22L22.5 8.5H22.469"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
