import type { SVGProps } from "react";

export const BadgeCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M30 16C30 13.9334 28.6965 12.1846 26.8735 11.4957C27.6744 9.71897 27.3607 7.55996 25.9004 6.09961C24.44 4.63926 22.281 4.32283 20.5043 5.12651C19.8154 3.30073 18.0652 2 16 2C13.9348 2 12.1846 3.30353 11.4958 5.12651C9.71897 4.32283 7.55996 4.63926 6.09961 6.09961C4.63926 7.55996 4.32423 9.71897 5.12651 11.4957C3.30073 12.1846 2 13.9348 2 16C2 18.0652 3.30353 19.8154 5.12651 20.5042C4.32563 22.281 4.63926 24.44 6.09961 25.9004C7.55996 27.3607 9.71897 27.6772 11.4958 26.8735C12.1846 28.6993 13.9348 30 16 30C18.0652 30 19.8154 28.6965 20.5043 26.8735C22.281 27.6744 24.44 27.3607 25.9004 25.9004C27.3607 24.44 27.6772 22.281 26.8735 20.5042C28.6993 19.8154 30 18.0652 30 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 17.25L13.75 21L22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
