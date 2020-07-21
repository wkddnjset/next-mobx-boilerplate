import * as React from "react";
import { withRouter } from "next/router";

function ScrollToTop(props) {
  const prevRouterRef = React.useRef();
  React.useEffect(() => {
    if (props.router.pathname !== prevRouterRef.current) {
      window.scrollTo(0, 0);
    }
    prevRouterRef.current = props.router.pathname;
  });
  return props.children;
};

export default withRouter(ScrollToTop);