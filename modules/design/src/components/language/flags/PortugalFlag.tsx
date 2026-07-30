import type { SVGProps } from "react";

export const PortugalFlag = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" {...props}>
      <title>portugal</title>
      <g>
        <path fill="var(--color-flag-portugal-green)" d="M18,42H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h16V42z" />
        <path fill="var(--color-flag-portugal-red)" d="M48,40c0,1.105-0.895,2-2,2H18V6h28c1.105,0,2,0.895,2,2V40z" />
        <circle fill="var(--color-flag-portugal-yellow)" cx="18" cy="22" r="6" />
      </g>
    </svg>
  );
};

PortugalFlag.displayName = "PortugalFlag";
