import type { SVGProps } from "react";

export const FlagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M45 21.6754L41.4288 22.5875C37.1347 23.6842 32.5962 23.3026 28.5455 21.5042V21.5042C24.9712 19.9174 21.0058 19.4289 17.1533 20.101L12 20.9999"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M28 7V35" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M7 45V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M41.4288 36.3068L45 35.3948V7.60528L41.171 8.39692C37.0156 9.25605 32.6991 8.87071 28.7616 7.28909C25.0364 5.79275 20.9676 5.3655 17.0128 6.05539L12 6.92983V34.7193L17.1533 33.8203C21.0058 33.1483 24.9712 33.6367 28.5455 35.2236C32.5962 37.0219 37.1347 37.4035 41.4288 36.3068Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
