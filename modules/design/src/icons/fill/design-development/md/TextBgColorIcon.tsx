import type { SVGProps } from "react";

export const TextBgColorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M19.5937 18H12.4063L15.9063 9H16.0937L19.5937 18Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6C2 3.79086 3.79086 2 6 2H26C28.2091 2 30 3.79086 30 6V26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V6ZM11.6285 20L10.1175 23.8854V25H7.53816L14.5382 7H17.4618L24.4618 25H21.8827V23.886L20.3715 20H11.6285Z"
        fill="currentColor"
      />
    </svg>
  );
};
