import type { SVGProps } from "react";

export const RingsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13.5 2H16.5V15H13.5V2Z" fill="currentColor" data-color="color-2" />
      <path d="M31.5 2H34.5V15H31.5V2Z" fill="currentColor" data-color="color-2" />
      <path
        d="M25 31C25 25.4772 20.5228 21 15 21C9.47715 21 5 25.4772 5 31C5 36.5228 9.47715 41 15 41C20.5228 41 25 36.5228 25 31ZM28 31C28 38.1797 22.1797 44 15 44C7.8203 44 2 38.1797 2 31C2 23.8203 7.8203 18 15 18C22.1797 18 28 23.8203 28 31Z"
        fill="currentColor"
      />
      <path
        d="M33 18C40.1797 18 46 23.8203 46 31C46 38.1797 40.1797 44 33 44C30.5963 44 28.3456 43.3464 26.4141 42.209C27.1258 41.4843 27.7696 40.6929 28.334 39.8438C29.7273 40.5804 31.3143 41 33 41C38.5228 41 43 36.5228 43 31C43 25.4772 38.5228 21 33 21C31.3144 21 29.7272 21.4188 28.334 22.1553C27.7696 21.3061 27.1258 20.5147 26.4141 19.79C28.3456 18.6528 30.5964 18 33 18Z"
        fill="currentColor"
      />
    </svg>
  );
};
