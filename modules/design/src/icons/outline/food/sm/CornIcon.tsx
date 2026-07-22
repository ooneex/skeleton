import type { SVGProps } from "react";

export const CornIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8.0258 11.6404C8.42821 6.44229 10.0547 2.00002 12 2.00002C13.9453 2.00002 15.5718 6.44229 15.9742 11.6404"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M12 20V22H13C14.9995 22 16.6861 20.5111 16.9341 18.527L17.1503 16.7978C17.3747 15.0027 18.2853 13.3641 19.6914 12.2257L21 11.1662V11H19C17.2865 11 15.7168 11.6157 14.5 12.6379"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 18V22H11C9.00049 22 7.31389 20.5111 7.06588 18.527L6.85042 16.8034C6.62562 15.0049 5.71202 13.3638 4.30183 12.2252L3 11.1741V11H5C8.86599 11 12 14.134 12 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
