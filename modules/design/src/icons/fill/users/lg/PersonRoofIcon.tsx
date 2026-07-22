import type { SVGProps } from "react";

export const PersonRoofIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 1.09235L47.1062 19.2472L45.2528 21.6062L24 4.9076L2.74726 21.6062L0.893799 19.2472L24 1.09235Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M24 25C27.5899 25 30.5 22.0899 30.5 18.5C30.5 14.9101 27.5899 12 24 12C20.4101 12 17.5 14.9101 17.5 18.5C17.5 22.0899 20.4101 25 24 25Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 42.2636C9 33.8715 15.6789 27 24 27C32.3211 27 39 33.8715 39 42.2636V42.9958L38.2762 43.1803C28.762 45.6066 19.238 45.6066 9.72379 43.1803L9 42.9958V42.2636Z"
        fill="currentColor"
      />
    </svg>
  );
};
