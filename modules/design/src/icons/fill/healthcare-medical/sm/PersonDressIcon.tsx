import type { SVGProps } from "react";

export const PersonDressIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m18.694,15.88l1.688-1.074-3.752-5.893c-.213-.335-.494-.596-.801-.815v-.012s-.02-.002-.02-.002c-.112-.079-.216-.172-.338-.233-2.304-1.138-4.639-1.139-6.94,0-.122.06-.227.154-.339.233l-.021.002v.012c-.306.218-.588.479-.801.815l-3.751,5.894,1.688,1.074,3.107-4.882.077.919-1.771,7.082h1.781v5h2.5v-5h2v5h2.5v-5h1.781l-1.771-7.082.076-.918,3.107,4.88Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <circle cx="12" cy="3" r="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m18.25,7h.25v-.25c0-1.519-1.231-2.75-2.75-2.75h-.25v.25c0,1.519,1.231,2.75,2.75,2.75Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
