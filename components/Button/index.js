import React from "react";
import ButtonStyle from './index.styled'

const Button = React.forwardRef((props, ref) => (
  <ButtonStyle {...props}>
    {props.children}
  </ButtonStyle>
))

export default Button