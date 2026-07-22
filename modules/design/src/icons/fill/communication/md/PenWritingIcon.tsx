import type { SVGProps } from "react";

export const PenWritingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="28" width="28" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m25.671,3.329c-.856-.857-1.995-1.329-3.207-1.329s-2.351.472-3.207,1.329l-13.683,13.683-2.566,8.98,8.98-2.566,13.683-13.683c.857-.856,1.329-1.996,1.329-3.207s-.472-2.351-1.329-3.207Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
