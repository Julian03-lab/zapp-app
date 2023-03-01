import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const IconPlay = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M9.525 18.025q-.5.325-1.012.038T8 17.175V6.825q0-.6.513-.888t1.012.038l8.15 5.175q.45.3.45.85t-.45.85l-8.15 5.175Z"
    />
  </Svg>
)

export const IconEdit = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="m19.3 8.925-4.25-4.2 1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4 7.25 21H3v-4.25l10.6-10.6 4.25 4.25Z"
    />
  </Svg>
)

export const IconDelete = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"
    />
  </Svg>
)

export const TabHome = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} preserveAspectRatio="xMaxYMid meet"
  viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M6 21q-.825 0-1.413-.588T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 3.5q.325 0 .625.1t.575.3l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4v-7h-4v7H6Z"
    />
  </Svg>
)

export const TabCollection = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} preserveAspectRatio="xMaxYMid meet"
  viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M3 21q-.825 0-1.413-.588T1 19V6h2v13h17v2H3Zm4-4q-.825 0-1.413-.588T5 15V4q0-.825.588-1.413T7 2h5l2 2h7q.825 0 1.413.588T23 6v9q0 .825-.588 1.413T21 17H7Z"
    />
  </Svg>
)

export const GoogleIcon = (props) => (
  <Svg
  width={24}
  height={24}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <Path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M23.866 12.31c0-.851-.076-1.67-.218-2.455H12.346v4.642h6.458a5.52 5.52 0 0 1-2.394 3.622v3.01h3.878c2.269-2.088 3.578-5.165 3.578-8.82Z"
    fill="#4285F4"
  />
  <Path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12.346 24.037c3.24 0 5.956-1.075 7.942-2.907l-3.878-3.011c-1.075.72-2.45 1.145-4.064 1.145-3.126 0-5.771-2.11-6.715-4.947H1.622v3.109a11.995 11.995 0 0 0 10.724 6.61Z"
    fill="#34A853"
  />
  <Path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5.631 14.317a7.213 7.213 0 0 1-.376-2.28c0-.79.136-1.56.376-2.28V6.648H1.622a11.995 11.995 0 0 0-1.276 5.39c0 1.935.464 3.768 1.276 5.388l4.01-3.109Z"
    fill="#FBBC05"
  />
  <Path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12.346 4.81c1.762 0 3.344.605 4.587 1.794l3.442-3.441C18.297 1.226 15.58.037 12.345.037c-4.69 0-8.748 2.69-10.723 6.611l4.01 3.11C6.574 6.92 9.22 4.81 12.345 4.81Z"
    fill="#EA4335"
  />
</Svg>
)

export const FacebookIcon = (props) => (
  <Svg
  width={24}
  height={24}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <Path
    d="M23.846 11.607c0-6.351-5.149-11.5-11.5-11.5s-11.5 5.149-11.5 11.5c0 5.74 4.205 10.498 9.703 11.36v-8.036H7.63v-3.324h2.92V9.073c0-2.882 1.717-4.474 4.344-4.474 1.258 0 2.574.225 2.574.225v2.83h-1.45c-1.429 0-1.874.886-1.874 1.796v2.157h3.19l-.51 3.324h-2.68v8.036c5.498-.862 9.703-5.62 9.703-11.36Z"
    fill="#fff"
  />
</Svg>
)
