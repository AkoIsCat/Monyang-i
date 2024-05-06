import React, { forwardRef } from 'react';
import { InputType } from '@/type';

const InputBox = forwardRef<HTMLInputElement, InputType>(function InputBox(
  { type, id },
  ref
) {
  return (
    <input
      type={type}
      id={id}
      ref={ref}
      className="border-b border-solid border-brown bg-lightBrown w-inputWidth h-inputHeight text-inputSize outline-none"
    />
  );
});

export default InputBox;
