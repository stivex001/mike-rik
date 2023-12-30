import * as React from "react"
import { SVGProps } from "react"
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
)
