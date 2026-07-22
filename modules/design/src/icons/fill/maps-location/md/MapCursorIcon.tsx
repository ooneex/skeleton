import type { SVGProps } from "react";

export const MapCursorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 2.31592L1 5.81592V28.9618L10 25.4618V2.31592Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.4853 15.9092L31.5689 30.7516L23.4853 28.021L15.4017 30.7516L23.4853 15.9092Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M15.0812 27.1587L12 25.6181V2.38208L20 6.38209V18.1272L15.0812 27.1587Z" fill="currentColor" />
      <path
        d="M22 14.5697C22.3744 14.1545 22.9119 13.9092 23.4853 13.9092C24.2176 13.9092 24.8914 14.3094 25.2417 14.9526L31 25.5255V3.03809L22 6.53808V14.5697Z"
        fill="currentColor"
      />
    </svg>
  );
};
