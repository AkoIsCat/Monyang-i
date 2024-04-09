type Type = {
  text: string;
};

export default function Button({ text }: Type) {
  return (
    <button className="w-buttonWidth h-buttonHeight bg-lightBrown rounded-radius20 text-2xl">
      {text}
    </button>
  );
}
