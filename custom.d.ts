// TODO replace the any with the actual type
declare module '*.png' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}

declare module '*.svg' {
  import React = require('react')
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}

declare module '*.json' {
  const value: any
  export default value
}

declare module 'redux-json-api'
