import type { SVGProps } from "react";

export const ChequeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 9H2V26H30V9H22.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M8 21H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 21H24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M11.9297 13.6663L20.2021 5.39391C21.195 4.40091 21.195 2.79097 20.202 1.79798C19.2091 0.804982 17.5991 0.804981 16.6061 1.79797L8.33378 10.0703L8 14L11.9297 13.6663Z"
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
