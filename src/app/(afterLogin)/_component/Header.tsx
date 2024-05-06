type Props = {
  headerText: string;
};

export default function Header({ headerText }: Props) {
  return (
    <div className="text-headerSize py-right px-[20px] border-b-10 border-darkBrown">
      {headerText}
    </div>
  );
}
