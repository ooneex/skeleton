import type { SVGProps } from "react";

export const PieIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 24.5L12.5 28H13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M16 11V8V8.45368"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5 20L5.91553 25.4932C6.15663 26.9398 7.4082 28 8.87472 28H23.1253C24.5918 28 25.8433 26.9398 26.0844 25.4932L27 20"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M4.75 20C6.82107 20 8.5 18.3859 8.5 16.3947C8.5 18.3859 10.1789 20 12.25 20C14.3211 20 16 18.3859 16 16.3947C16 18.3859 17.6789 20 19.75 20C21.8211 20 23.5 18.3859 23.5 16.3947C23.5 18.3859 25.1789 20 27.25 20C29.3211 20 31 18.3859 31 16.3947C31 14.4036 29.3211 12.7895 27.25 12.7895L26.2348 11.8785C20.4717 6.70718 11.5283 6.70717 5.76523 11.8785L4.75 12.7895C2.67893 12.7895 1 14.4036 1 16.3947C1 18.3859 2.67893 20 4.75 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M16 3V1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M23 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M20 24.5L19.5 28H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
