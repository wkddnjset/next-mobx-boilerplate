import styled, { css } from 'styled-components'
import theme from 'layout/theme'

const ButtonStyle = styled.button`
  color: ${props => props.color ? props.color : theme.color.PRIMARY};
  border: solid 2px ${props => props.borderColor ? props.borderColor : theme.color.PRIMARY};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : theme.color.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  ${props => props.disabled && css`
    filter: brightness(0.96);
    cursor: default;
  `}
  :hover {
    filter: brightness(0.96);
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    font-size: 12px;
    width: 140px;
    height: 48px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 12px;
    width: 160px;
    height: 52px;
  }
  @media (min-width: 992px) and (max-width: 1299.98px) { 
    font-size: 14px;
    width: 180px;
    height: 54px;
  }
  @media (min-width: 1300px) { 
    font-size: 16px;
    width: 200px;
    height: 56px;
  }
`

export default ButtonStyle