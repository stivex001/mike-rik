import * as React from "react";
import { SVGProps } from "react";
export const ArrowR = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      stroke="#00683D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.328}
      d="M2.091 17.24 23.043 7.057m0 0L7.476 1.673m15.567 5.384-5.385 15.567"
    />
  </svg>
);

export const ArrowBtn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={57}
    height={46}
    fill="none"
    {...props}
  >
    <path fill="#00683D" d="M57 0H0v46h57z" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m23.06 26.416 12.591-6.12m0 0-9.355-3.236m9.355 3.236-3.236 9.356"
    />
  </svg>
);
