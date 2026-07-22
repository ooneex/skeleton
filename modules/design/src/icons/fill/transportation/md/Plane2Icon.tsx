import type { SVGProps } from "react";

export const Plane2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M0.268097 10.0411L5.85734 17.0353C6.60142 17.9664 7.82611 18.3687 8.97739 18.0602L14.6885 16.5299L14.8316 24.5198L18.6548 24.4959L23.1495 14.2628L28.9644 12.7047C30.8315 12.2044 31.9395 10.2853 31.4392 8.41827C30.9389 6.55123 29.0198 5.44323 27.1528 5.94348L8.28647 10.9984L5.0952 8.74771L0.268097 10.0411Z"
        fill="currentColor"
      />
      <path
        d="M12.8195 0.901489L9.14957 2.49657L11.7842 7.99072L19.0292 6.04954L12.8195 0.901489Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 27L29 27L29 29L3 29L3 27Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
