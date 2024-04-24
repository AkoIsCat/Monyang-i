type Props = {
  forName: string;
  text: string;
};

export default function FormTitle({ forName, text }: Props) {
  return <label htmlFor={forName} className="text-navSize w-formTitleWidth inline-block">{text}</label>;
}
