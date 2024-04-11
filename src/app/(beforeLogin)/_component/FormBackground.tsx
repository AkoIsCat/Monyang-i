import { ReactNode } from 'react';

type Children = {
  children: ReactNode;
};

export default function FormBackground({ children }: Children) {
  return (
    <div className="w-formWidth h-formHeight bg-lightBrown flex flex-col justify-center rounded-radiusTenPx my-form p-input rounded-radius10">
      {children}
    </div>
  );
}
