'use client';
import React from 'react';

import clsx from 'clsx';

import Typography from '../Typography';

import { InputContainer } from './style';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  error?: string;
  touched?: boolean;
  requiredField?: boolean;
  loader?: boolean;
  className?: string;
  placeholder?: string;
};

const TextArea = ({
  label,
  error = '',
  touched,
  requiredField,
  className,
  value,
  onChange,
  placeholder,
}: InputProps) => {
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
        <textarea
          id={inputId}
          placeholder={placeholder}
          onChange={onChange}
          rows={5}
          value={value}
          cols={100}
        />
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

export default TextArea;
