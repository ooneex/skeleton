import type { SVGProps } from "react";

export const LockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 11.2273L34 21.5H31V11.2295C30.987 7.20529 27.8248 4.01444 24 4C20.1752 4.01444 17.0129 7.20533 17 11.2296V21.5H14V11.2273C14.008 5.75672 18.4619 1.01716 23.9953 1C29.4834 1 33.986 5.81383 34 11.2273Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18C8.68629 18 6 20.6863 6 24V40C6 43.3137 8.68629 46 12 46H36C39.3137 46 42 43.3137 42 40V24C42 20.6863 39.3137 18 36 18H12ZM19 30C19 27.2386 21.2386 25 24 25C26.7614 25 29 27.2386 29 30C29 32.2388 27.5286 34.134 25.5 34.7711V39H22.5V34.7711C20.4714 34.134 19 32.2388 19 30Z"
        fill="currentColor"
      />
    </svg>
  );
};
