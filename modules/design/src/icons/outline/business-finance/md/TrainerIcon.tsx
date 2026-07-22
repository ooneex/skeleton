import type { SVGProps } from "react";

export const TrainerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 19L11 31L21 31L22 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M24 27L27.7735 23.2265C28.4772 22.5228 28.5564 21.4086 27.9592 20.6123L23.9 15.2C23.3334 14.4446 22.4443 14 21.5 14H10.5C9.55573 14 8.66656 14.4446 8.1 15.2L4.04075 20.6123C3.44357 21.4086 3.52276 22.5228 4.22654 23.2265L8 27"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 1C18.4056 1 20.2665 3.09475 19.9686 5.46513L19.8191 6.65087C19.5779 8.5645 17.9413 10 16 10C14.0587 10 12.421 8.5645 12.1809 6.65087L12.0314 5.46513C11.7335 3.09363 13.5944 1 16 1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 19H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
