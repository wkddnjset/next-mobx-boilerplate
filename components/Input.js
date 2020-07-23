import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import theme from 'layout/theme'


const CustomInput = withStyles({
  root: {
    width: '100%',
    margin: '15px 0',
    '& label.Mui-focused': {
      color: theme.color.PRIMARYH,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.color.PRIMARYH,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        // borderColor: 'red',
      },
      '&:hover fieldset': {
        // borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.color.PRIMARYH,
      },
    },              
  },            
})(TextField);


const Input = ({placeholder, label, onChange, ...props}) => {
  const [text, setText] = useState('')
  const [focused, setFocused] = useState(false)
  const onBlur = () => {
    if(!text){
      setFocused(false)
    }
  }
  const onChangeText = (e) => {
    setText(e.target.value)
    onChange(e.target.value)
  }
  return ( 
    <CustomInput {...props} 
      label={focused ? label : placeholder} 
      onFocus={() => setFocused(true)} 
      onBlur={onBlur} 
      onChange={onChangeText}/>
  )
}

export default Input