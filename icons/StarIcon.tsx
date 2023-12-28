import * as React from "react"
import { SVGProps } from "react"
export const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={48}
    fill="none"
    {...props}
  >
    <path
      stroke="#FFCA1D"
      strokeWidth={2}
      d="m21 1.639 7.128 9.253.251.327.409.054 11.577 1.546-4.45 10.8-.157.381.157.381 4.45 10.8-11.577 1.546-.409.054-.251.327L21 46.36l-7.128-9.253-.251-.327-.409-.054L1.635 35.18l4.45-10.8.157-.381-.157-.381-4.45-10.8 11.577-1.546.409-.054.251-.327L21 1.64Z"
    />
  </svg>
)

