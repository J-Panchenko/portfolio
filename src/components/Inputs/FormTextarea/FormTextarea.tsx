import {
  CSSProperties,
  DetailedHTMLProps,
  TextareaHTMLAttributes,
} from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Textarea, TextareaProps } from '@chakra-ui/react';
import ErrorMessage from 'components/ErrorMessage';
import { motion } from 'framer-motion';
import './FormTextarea.scss';

type FormTextareaProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  registerName: keyof T;
  label?: string;
  errorMessage?: string;
  wrapperStyle?: CSSProperties;
  labelClasses?: string;
  inputClasses?: string;
  wrapperClasses?: string;
} & TextareaProps
  & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

function FormTextarea<T extends FieldValues = FieldValues>(props: FormTextareaProps<T>) {
  const {
    register,
    registerName,
    label,
    errorMessage,
    wrapperStyle,
    labelClasses,
    inputClasses,
    wrapperClasses,
    ...textareaProps
  } = props;
  const textareaName = registerName as T[keyof T];
  const animate = { marginBottom: errorMessage ? '24px' : '0' };
  const wrapperClassName = `form-textarea${wrapperClasses ? ` ${wrapperClasses}` : ''}`;
  const labelClassName = `form-textarea__label${labelClasses ?
    ` ${labelClasses}` : ''}${errorMessage ?
    ' label-error' : ''}`;
  const inputClassName = `form-textarea__input${inputClasses ?
    ` ${inputClasses}` : ''}${errorMessage ?
    ' input-error' : ''}`;

  return (
    <div className={wrapperClassName} style={wrapperStyle}>
      {label ? (
        <label className={labelClassName} htmlFor={textareaName}>
          {label}
        </label>
      ) : null}
      <motion.div className="form-textarea__input-wrapper" animate={animate}>
        <Textarea
          className={inputClassName}
          id={textareaName}
          {...register(textareaName)}
          {...textareaProps}
        />
      </motion.div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}

export default FormTextarea;
