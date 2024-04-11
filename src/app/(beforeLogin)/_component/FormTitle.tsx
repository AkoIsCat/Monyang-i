type Props = {
  forName: string;
  text: string;
};

export default function FormTitle({ forName, text }: Props) {
  return <label htmlFor={forName} className="text-2xl w-formTitleWidth inline-block">{text}</label>;
}
