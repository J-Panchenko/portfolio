import {
  CSSProperties,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from 'components';
import { motion } from 'framer-motion';
import './FormInput.scss';

type FormInputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  registerName: keyof T;
  label?: string;
  errorMessage?: string;
  wrapperStyle?: CSSProperties;
  labelClasses?: string;
  inputClasses?: string;
  wrapperClasses?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function FormInput<T extends FieldValues = FieldValues>(props: FormInputProps<T>) {
  const {
    register,
    registerName,
    label,
    errorMessage,
    wrapperStyle,
    labelClasses,
    inputClasses,
    wrapperClasses,
    ...inputProps
  } = props;
  const inputName = registerName as T[keyof T];
  const animate = { marginBottom: errorMessage ? '24px' : '0' };
  const wrapperClassName = `form-input${wrapperClasses ? ` ${wrapperClasses}` : ''}`;
  const labelClassName = `form-input__label${labelClasses ?
    ` ${labelClasses}` : ''}${errorMessage ?
    ' label-error' : ''}`;
  const inputClassName = `form-input__input${inputClasses ?
    ` ${inputClasses}` : ''}${errorMessage ?
    ' input-error' : ''}`;

  return (
    <div className={wrapperClassName} style={wrapperStyle}>
      {label ? (
        <label className={labelClassName} htmlFor={inputName}>
          {label}
        </label>
      ) : null}
      <motion.div className="form-input__input-wrapper" animate={animate}>
        <input
          className={inputClassName}
          id={inputName}
          {...register(inputName)}
          {...inputProps}
        />
      </motion.div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}

export default FormInput;
