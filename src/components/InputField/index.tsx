'use client';
import React from 'react';

import clsx from 'clsx';
import { Eye, EyeClosed } from 'lucide-react';

import Typography from '../Typography';

import { InputContainer } from './style';

type InputProps = {
  label?: string;
  error?: string;
  touched?: boolean;
  requiredField?: boolean;
  loader?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({
  label,
  error = '',
  touched,
  autoComplete,
  type,
  requiredField,
  loader,
  className,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const inputId = React.useId();
  const errorId = React.useId();
  const requiredLabelId = React.useId();

  const isError = !!error && touched;

  return (
    <InputContainer
      className={clsx({ error: !!isError }, 'input-field-wrapper', className)}
    >
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {requiredField && (
            <span
              data-tooltip-id={requiredLabelId}
              className="label-required-indicator red"
            >
              *
            </span>
          )}
        </label>
      )}
      <div className="input-wrapper">
        <input
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          id={inputId}
          autoComplete={autoComplete || 'off'}
          {...rest}
          aria-invalid={!!isError}
          aria-describedby={!!isError ? `${errorId}-error` : undefined}
        />

        {type === 'password' &&
          (showPassword ? (
            <Eye
              size={20}
              className="password-toggle-icon"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <EyeClosed
              size={20}
              className="password-toggle-icon"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ))}
      </div>
      {isError && (
        <Typography
          as="p"
          className="input-error"
          role="alert"
          id={`${errorId}-error`}
        >
          {error}
        </Typography>
      )}
    </InputContainer>
  );
};

export default InputField;
