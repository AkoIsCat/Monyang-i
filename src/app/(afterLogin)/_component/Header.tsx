import { HeaderType } from "@/type";

export default function Header({ headerText }: HeaderType) {
  return (
    <div className="text-headerSize py-right px-[20px] border-b-10 border-darkBrown">
      {headerText}
    </div>
  );
}
