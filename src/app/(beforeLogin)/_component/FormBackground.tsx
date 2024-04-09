import { ReactNode } from 'react';

type Children = {
  children: ReactNode;
};
export default function FormBackground({ children }: Children) {
  return <div className='w-formWidth h-formHeight bg-lightBrown flex justify-center items-center rounded-radiusTenPx my-form'>{children}</div>;
}
