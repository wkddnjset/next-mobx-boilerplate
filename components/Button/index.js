import React from "react";
import ButtonStyle from './index.styled'

function Button({ children, ...props}) {
  return (
    <ButtonStyle {...props}>
      {children}
    </ButtonStyle>
  );
}

export default Button