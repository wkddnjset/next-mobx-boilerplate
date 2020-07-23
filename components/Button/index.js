import React from "react";
import ButtonStyle from './index.styled';
import CircularProgress from '@material-ui/core/CircularProgress';
import theme from 'layout/theme';

function Button({ children, ...props}) {
  return (
    <ButtonStyle {...props}>
      {children}
      {props.disabled && <CircularProgress size={props.loadingSize || 20} style={{marginLeft: 10, color: theme.color.PRIMARY}}/>}
    </ButtonStyle>
  );
}

export default Button