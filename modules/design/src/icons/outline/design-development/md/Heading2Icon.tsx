import type { SVGProps } from "react";

export const Heading2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M30 26H19V24.5714V24.5714C19 22.8196 19.9874 21.2174 21.5522 20.4299L26.5333 17.9232C28.6589 16.8535 30 14.6772 30 12.2977V11.5C30 8.46244 27.5376 6 24.5 6V6C21.4624 6 19 8.46243 19 11.5V11.7143"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M14 16H2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M2 6V26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M14 6V26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
