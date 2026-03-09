'use client';
import React from 'react';

import clsx from 'clsx';

import Typography from '../Typography';

import { TextAreaContainer } from './style';

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
  onBlur?: () => void;
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
  onBlur,
}: InputProps) => {
  const inputId = React.useId();
  const errorId = React.useId();
  const requiredLabelId = React.useId();

  const isError = !!error && touched;

  return (
    <TextAreaContainer
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
          onBlur={onBlur}
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
    </TextAreaContainer>
  );
};

export default TextArea;
