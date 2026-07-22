import type { SVGProps } from "react";

export const TextOverlineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 35.5H15V32.5H33V35.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2122 11H25.7872L37.8619 43H33.7381V40.5688L24.0005 14.7626L14.2423 40.6645V43H10.1566L22.2122 11Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 4.5H4V7.5H44V4.5Z" fill="currentColor" />
    </svg>
  );
};
