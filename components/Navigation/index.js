import React from "react";

const Navigation = React.forwardRef((props, ref) => (
  <div {...props}>
    {props.children}
  </div>
))

export default Navigation