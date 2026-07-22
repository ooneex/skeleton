import type { SVGProps } from "react";

export const IceSkateIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 16H9V22H7V16Z" fill="currentColor" data-color="color-2" />
      <path d="M14 16H16V22H14V16Z" fill="currentColor" data-color="color-2" />
      <path
        d="M22 18.5V17.5H24V18.5C24 20.433 22.433 22 20.5 22H2V20H20.5C21.3284 20 22 19.3284 22 18.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M12 1V5H8V7H12V10H16C18.7614 10 21 12.2386 21 15V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V1H12Z"
        fill="currentColor"
      />
    </svg>
  );
};
