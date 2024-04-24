type Type = {
  text: string;
  type: 'submit' | 'button';
};

export default function Button({ text, type }: Type) {
  return (
    <button
      type={type}
      className="w-buttonWidth h-buttonHeight bg-lightBrown rounded-radius20 text-navSize hover:shadow-buttonShadow"
    >
      {text}
    </button>
  );
}
