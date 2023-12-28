import * as React from "react"
import { SVGProps } from "react"
export const RingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={167}
    height={167}
    fill="none"
    {...props}
  >
    <circle
      cx={83.5}
      cy={83.5}
      r={82}
      stroke="#FFCA1D"
      strokeDasharray="10 10"
      strokeWidth={3}
    />
  </svg>
)

