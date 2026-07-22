import type { SVGProps } from "react";

export const BraIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M36 33V40.5V39.75" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 33V40.5V39.75" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M24 30V37" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M6 20V7H10L12 21.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M42 20V7H38L36 21.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M30.1761 39.1791L24.8107 37H24.0016H23.1925L17.7896 39.1895C12.0495 41.5157 4.56012 40.6505 2.6749 34.7509C1.20687 30.1569 2.34464 25.3608 5.50393 20L8.86856 20.6563C13.8539 21.6288 18.3771 24.2243 21.7324 28.0376L23.459 30H24.0016H24.5441L26.2172 28.0894C29.5849 24.2439 34.1377 21.6298 39.1566 20.6599L42.5331 20.0075C45.7348 24.8365 46.8229 29.8535 45.2434 34.7014C43.3235 40.5945 35.9184 41.5114 30.1761 39.1791Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
