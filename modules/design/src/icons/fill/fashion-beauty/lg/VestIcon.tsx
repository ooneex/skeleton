import type { SVGProps } from "react";

export const VestIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 18.5479V40.2178L18.5557 44H10C6.68629 44 4 41.3137 4 38V22.3408L4.60645 22.0811C7.67924 20.764 9.04917 18.142 9.6416 14.9434C10.2444 11.6881 10 8.09898 10 5V4H15.6133L22.5 18.5479ZM10 28V34.4258L14.5 36.6113L19 34.4258V28H10Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 5C38 8.09568 37.755 11.9399 38.3594 15.3242C38.9596 18.6853 40.3272 21.1958 43.2744 22.0381L44 22.2461V38C44 41.3137 41.3137 44 38 44H29.4434L25.5 40.2119V18.5479L32.3857 4H38V5ZM29 34.4258L33.5 36.6113L38 34.4258V28H29V34.4258Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
