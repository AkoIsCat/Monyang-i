import { ChildrenType } from '@/type';

export default function TitleBox({ children }: ChildrenType) {
  return (
    <div className="w-searchWidth h-headerHeight bg-lightBrownTP text-navSize rounded-t-radius10 p-right">
      {children}
    </div>
  );
}
