import type { SVGProps } from "react";

export const CubeAxisIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.394 23.5808L31.8132 25.4747L31.0253 27.313L26.6062 25.4191L27.394 23.5808Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.60597 23.5808L0.186833 25.4747L0.974666 27.313L5.3938 25.4191L4.60597 23.5808Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 1V5.5H15V1H17Z" fill="currentColor" data-color="color-2" />
      <path d="M4 25.0658V12.0188L15 16.6633V29.6658L4 25.0658Z" fill="currentColor" />
      <path d="M17 29.6657L28 25.0657V12.0608L17 16.6655V29.6657Z" fill="currentColor" />
      <path d="M15.9999 4.91602L4.10278 9.89118L16.0016 14.9151L27.9501 9.91339L15.9999 4.91602Z" fill="currentColor" />
    </svg>
  );
};
