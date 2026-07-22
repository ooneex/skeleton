import type { SVGProps } from "react";

export const RawImageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="1" y="7" width="30" height="18" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M13 18H17.5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M12.5783 19.5H12.5L14.5 12.5H16L18 19.5H17.9148"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7.5 16.5L8.33205 15.9453L8.03518 15.5H7.5V16.5ZM9.5 19.5V20.5H11.3685L10.3321 18.9453L9.5 19.5ZM9.34037 18.5H8.34037V20.5H9.34037V18.5ZM6.5 17.5H7.5V15.5H6.5V17.5ZM6.66795 17.0547L8.66795 20.0547L10.3321 18.9453L8.33205 15.9453L6.66795 17.0547ZM9.5 18.5H9.34037V20.5H9.5V18.5Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M5 19.5V12.5H7.5C8.60457 12.5 9.5 13.3954 9.5 14.5V14.5C9.5 15.6046 8.60457 16.5 7.5 16.5H5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20.5692 12.5H20.5L21 19.5H22L24 15.5L26 19.5H27L27.5 12.5H27.469"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
