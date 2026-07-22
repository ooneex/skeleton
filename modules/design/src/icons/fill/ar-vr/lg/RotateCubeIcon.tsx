import type { SVGProps } from "react";

export const RotateCubeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M35.0523 16.2726L24 11.4075L12.9478 16.2726L24 21.3492L35.0523 16.2726Z" fill="currentColor" />
      <path d="M36 19.1387L25.5 23.9616V35.9324L36 31.3104V19.1387Z" fill="currentColor" />
      <path d="M22.5 35.9324V23.9616L12 19.1387V31.3104L22.5 35.9324Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.9104 1.88245L21.4083 8.58169L18.9183 6.90837L19.9034 5.4426C11.3795 7.31558 5 14.9131 5 24V25.5H2V24C2 12.2091 11.275 2.58542 22.928 2.0257L25.9104 1.88245Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 22.5V24C46 35.7909 36.725 45.4146 25.072 45.9743L22.0896 46.1176L26.5917 39.4184L29.0817 41.0917L28.0967 42.5574C36.6206 40.6844 43 33.0868 43 24V22.5H46Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
