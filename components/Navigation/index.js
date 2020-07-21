import React from "react";

function Navigation({ children, ...props}) {
  return (
    <div {...props}>
      {children}
    </div>
  );
}

export default Navigation