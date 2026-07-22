import type { SVGProps } from "react";

export const PowerOffIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 1V13H15V1H17Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.326 5.57981L11.4171 5.99694C7.62809 7.73598 5 11.5621 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 11.5621 24.3719 7.73598 20.5829 5.99694L19.674 5.57981L20.5083 3.76212L21.4171 4.17924C25.8902 6.23223 29 10.7519 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16C3 10.7519 6.10979 6.23223 10.5829 4.17924L11.4917 3.76212L12.326 5.57981Z"
        fill="currentColor"
      />
    </svg>
  );
};
