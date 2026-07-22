import type { SVGProps } from "react";

export const ThreeDPrinterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 8V12.664L8 14.7692L8 19.2308L11 20.4939V16.2036L18 13.2755V20.5587L12 23.085L6 20.5587L6 13.4413L11 11.336V8H13Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9.20184L9 7.20184L9 3L10 3L14 3L15 3L15 7.20184L12 9.20184Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H22V4H2V2Z" fill="currentColor" />
    </svg>
  );
};
