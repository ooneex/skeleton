import type { SVGProps } from "react";

export const PersonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 5C13.3807 5 14.5 3.88071 14.5 2.5C14.5 1.11929 13.3807 0 12 0C10.6193 0 9.5 1.11929 9.5 2.5C9.5 3.88071 10.6193 5 12 5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M16.725 8.89606C16.546 7.82006 15.789 6.92206 14.75 6.55206C12.68 5.81606 11.28 5.82106 9.21303 6.56706C8.19803 6.93306 7.45603 7.82506 7.27703 8.89606L6.33203 14.5651L8.47803 15.6381L9.00003 24.0011H15L15.522 15.6381L17.668 14.5651L16.723 8.89706L16.725 8.89606Z"
        fill="currentColor"
      />
    </svg>
  );
};
