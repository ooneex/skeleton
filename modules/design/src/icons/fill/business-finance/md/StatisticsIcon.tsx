import type { SVGProps } from "react";

export const StatisticsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.4094 2.11617L19.909 11.0176L12.109 4.58904L2.88384 12.4094L1.59056 10.8839L12.091 1.98242L19.891 8.41099L29.1162 0.590576L30.4094 2.11617Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 9.84131V30H2V20.5368L12.091 11.9824L19.891 18.411L30 9.84131Z"
        fill="currentColor"
      />
    </svg>
  );
};
