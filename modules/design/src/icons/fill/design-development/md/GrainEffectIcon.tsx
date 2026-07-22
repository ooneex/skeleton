import type { SVGProps } from "react";

export const GrainEffectIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 2H9V9H16V2Z" fill="currentColor" />
      <path d="M16 16H9V23H16V16Z" fill="currentColor" data-color="color-2" />
      <path d="M9 2H2V9H9V2Z" fill="currentColor" />
      <path d="M9 9H2V16H9V9Z" fill="currentColor" />
      <path d="M9 23H2V30H9V23Z" fill="currentColor" data-color="color-2" />
      <path d="M23 23H16V30H23V23Z" fill="currentColor" />
      <path d="M30 2H23V9H30V2Z" fill="currentColor" data-color="color-2" />
      <path d="M30 16H23V23H30V16Z" fill="currentColor" />
    </svg>
  );
};
