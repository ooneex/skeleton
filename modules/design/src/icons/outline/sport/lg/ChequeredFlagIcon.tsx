import type { SVGProps } from "react";

export const ChequeredFlagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M34.4244 7.72845L31.9929 31.7213" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M23.6313 10.2344L21.1998 34.2273" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M44.5 21L38.4493 19.9477C34.8825 19.3274 31.2144 19.6802 27.8313 20.969V20.969C24.3457 22.2969 20.5598 22.6304 16.8957 21.9325L12 21"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M13.25 9L17.6836 9.8651C21.4893 10.6077 25.4253 10.2999 29.0693 8.97481V8.97481C32.6258 7.68153 36.4621 7.35675 40.1854 8.03371L45.5 9L43.0934 33L37.77 32.0362C34.0213 31.3575 30.1599 31.6832 26.5779 32.9803V32.9803C22.927 34.3022 18.9871 34.6147 15.1735 33.8848L10.5508 33"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9 3L4 45H9L14 3H9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
