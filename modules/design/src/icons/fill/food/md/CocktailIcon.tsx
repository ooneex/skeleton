import type { SVGProps } from "react";

export const CocktailIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29 8C29 5.23858 26.7614 3 24 3C21.2386 3 19 5.23858 19 8H17C17 4.13401 20.134 1 24 1C27.866 1 31 4.13401 31 8C31 11.866 27.866 15 24 15C22.5704 15 21.2381 14.5704 20.1289 13.833L21.2363 12.167C22.0276 12.6931 22.9764 13 24 13C26.7614 13 29 10.7614 29 8Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M13 20.5H15V31H13V20.5Z" fill="currentColor" />
      <path d="M19 29V31H9V29H19Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 9.03418L24.7988 9.30078L14 23.6641L3.20117 9.30078L3 9.03418V7H25V9.03418ZM7.73242 12H20.2676L22.5234 9H5.47656L7.73242 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
