import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { InputAdornment, OutlinedInput } from '@material-ui/core';
interface MakeStylesPropType {
  size: string;
}

interface InputPropsType {
  startIcon?: any;
  endIcon?: any;
  placeholder?: string;
  className?: string;
  wrapperClass?: string;
  label?: any;
  footer?: any;
  name?: string;
  size?: 'small' | 'medium';
  isMulti?: boolean;
  error?: boolean;
  row?: number;
  value?: any;
  type?: string;
  disabled?: boolean;
  onChangeData?: (val: string) => void;
  register?: UseFormRegister<FieldValues> | null;
}

const useStyles = makeStyles<Theme, MakeStylesPropType>(theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flexDirection: 'column',
    position : 'relative',
    width : '100%',
  },
  root: {
    color: '#fff',
    fontWeight: 500,
    // border: `none !important`,
    // borderTop: 'none',
    // borderLeft: 'none',
    // borderRight: 'none',
    border : '1px #222 solid',
    background: '#ffffff00',
    borderRadius: 10,
    padding : 0,
    width : 'calc(100% - 150px)',
    fontSize: props => (props.size === 'small' ? 13 : 14),
    minHeight: props => (props.size === 'small' ? 41 : 40),
    [theme.breakpoints.down('xs')]: {
      width : 'calc(100% - 100px)',
      minHeight: '35px !important',
      borderRadius: 5,
    },
    '&.Mui-error': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      // borderColor: 'rgba(0, 0, 0, 0) !important',
    },
    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0) !important',
    },
    '&.Mui-focused': {
      // borderColor: 'rgba(0, 0, 0, 0) !important',
    },
    '& input': {
      padding: '10px 10px',
      // paddingRight: 50,
      background: '#ffffff00',
      color: '#fff',
      borderRadius: 10,
      [theme.breakpoints.down('xs')]: {
        padding: '7px 10px',
      },
    },
    '& textarea': {
      padding: '10px 10px',
      background: '#ffffff00',
      // border : '1px #222 solid',
      borderRadius: 10,
      [theme.breakpoints.down('xs')]: {
        padding: '7px 10px',
      },
    },
    '& input::placeholder, & textarea::placeholder,': {
      color: '#727272',
      opacity: 1,
    },
    '& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button': {
      display: 'none', 
    },
  },
  back1: {
    background: '#E4CCFD',
  },
  icon: {
    color: '#16CE8E',
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 25,
  },
  endIcon: {
    color: '#1EA1F2',
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 25,
    position : 'absolute',
    right : 0,
  },
  label: {
    // marginBottom: 9,
    display : 'flex',
    justifyContent : 'space-between',
    fontSize: 16,
    fontWeight: 500,
    width : 150,
    color : '#636569',
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      width : 100,
    },
    '& span': {
      color: '#727272',
      fontWeight: 400,
    },
  },
  footer: {
    marginBottom: 9,
    textAlign : 'end',
    fontSize: 18,
    
    color : '#343A69',
    '& span': {
      fontWeight: 400,
      color: '#727272',
    },
  },
}));
const TextInput = ({
  startIcon = <span />,
  endIcon = <span />,
  placeholder = '',
  className = '',
  wrapperClass = '',
  name = '',
  label = null,
  footer = null,
  size = 'medium',
  isMulti = false,
  row = 3,
  value = '',
  onChangeData,
  error = null,
  register = null,
  type = 'text',
  disabled = false,
}: InputPropsType) => {
  const classes = useStyles({ size });
  const [val, setVal] = useState<string>(value);

  const changeHandler = (data: string) => {
    setVal(data);
    onChangeData && onChangeData(data);
  };
  
  useEffect(() => {
    if (value && value !== "")changeHandler(value);
  })

  return (
    <div className={clsx(classes.wrapper, wrapperClass)}>
      {Boolean(label) && <h3 className={classes.label}>{label}</h3>}

      <OutlinedInput
        className={`${clsx(classes.root, className)} ${startIcon === '@' ? classes.back1:''}`}
        placeholder={placeholder}
        value={val}
        onChange={e => {
          changeHandler(e.currentTarget.value);
        }}
        error={error}
        rows={row}
        {...(register && register(name, { required: false }))}
        multiline={isMulti}
        type={type}
        notched={false}
        startAdornment={ 
          <InputAdornment position="start" className={startIcon === '@' ? classes.icon:""} style = {{display : startIcon === '@'? 'flex':'none'}}>
            {startIcon || null}
          </InputAdornment>
        }
        endAdornment={ 
          <InputAdornment position="end" className={classes.endIcon} >
            {endIcon || null}
          </InputAdornment>
        }
        disabled={disabled}
      />
       {Boolean(footer) && <h3 className={classes.footer}>{footer}</h3>}
    </div>
  );
};

export default TextInput;
