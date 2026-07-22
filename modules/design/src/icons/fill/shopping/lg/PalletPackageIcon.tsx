import type { SVGProps } from "react";

export const PalletPackageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 37H47V44.0001H37V40.0001H29V44.0001H19V40.0001H11V44.0001H1V37Z"
        fill="currentColor"
      />
      <path d="M15 3H10V13.5H22V3H17V7H15V3Z" fill="currentColor" data-color="color-2" />
      <path d="M15 16.5H10V27L22 27V16.5H17V20.5H15V16.5Z" fill="currentColor" data-color="color-2" />
      <path d="M30.5 3H26V13.5H38V3H32.5V7H30.5V3Z" fill="currentColor" data-color="color-2" />
      <path d="M31 16.5H26V27H38V16.5H33V20.5H31V16.5Z" fill="currentColor" data-color="color-2" />
      <path
        d="M47 33L41 10.5977V27C41 28.6568 39.6569 30 38 30H10C8.34315 30 7 28.6568 7 27V10.5977L1 33V34H47V33Z"
        fill="currentColor"
      />
    </svg>
  );
};
