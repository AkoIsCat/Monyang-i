import React, { forwardRef } from 'react';

type Props = {
  type: string;
  id: string;
};

const InputBox = forwardRef<HTMLInputElement, Props>(function InputBox(
  { type, id },
  ref
) {
  return (
    <input
      type={type}
      id={id}
      ref={ref}
      className="border-b border-solid border-brown bg-lightBrown w-inputWidth h-inputHeight text-lg outline-none"
    />
  );
});

export default InputBox;
