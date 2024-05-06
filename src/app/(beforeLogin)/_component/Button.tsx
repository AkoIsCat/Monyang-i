import { formBtnType } from '@/type';

export default function Button({ text, type }: formBtnType) {
  return (
    <button
      type={type}
      className="w-buttonWidth h-buttonHeight bg-lightBrown rounded-radius20 text-navSize hover:shadow-buttonShadow"
    >
      {text}
    </button>
  );
}
