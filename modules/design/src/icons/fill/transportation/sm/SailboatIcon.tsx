import type { SVGProps } from "react";

export const SailboatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M23 17.277V14.9487L9 15.6487V18H7V15.7487L0.792027 16.0591L1.69787 20.5883C1.97832 21.9906 3.20956 23 4.63961 23H17.8676C18.9214 23 19.8979 22.4471 20.4401 21.5435L23 17.277Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 0.171448L13 13.4512L1.81702 14.0104L13 0.171448Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
