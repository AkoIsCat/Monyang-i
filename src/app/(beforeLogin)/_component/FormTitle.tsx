import { FormTitleType } from '@/type';

export default function FormTitle({ forName, text }: FormTitleType) {
  return (
    <label
      htmlFor={forName}
      className="text-navSize w-formTitleWidth inline-block"
    >
      {text}
    </label>
  );
}
