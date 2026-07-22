import type { SVGProps } from "react";

export const CardsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M25.5 3H7.5C6.11929 3 5 4.11929 5 5.5V31.5C5 32.8807 6.11929 34 7.5 34H25.5C26.8807 34 28 32.8807 28 31.5V5.5C28 4.11929 26.8807 3 25.5 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M33 11.8347L42.6087 14.4093C43.9423 14.7666 44.7338 16.1375 44.3764 17.4711L37.6471 42.5852C37.2898 43.9189 35.9189 44.7103 34.5853 44.353L15.5 39.2391"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M21 18.5L16.5 13L12 18.5L16.5 24L21 18.5Z"
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
