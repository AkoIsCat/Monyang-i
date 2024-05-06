import { ChildrenType } from '@/type';

export default function FormBackground({ children }: ChildrenType) {
  return (
    <div className="relative w-formWidth h-formHeight bg-lightBrown flex flex-col justify-center rounded-radiusTenPx my-form p-input rounded-radius10">
      {children}
    </div>
  );
}
