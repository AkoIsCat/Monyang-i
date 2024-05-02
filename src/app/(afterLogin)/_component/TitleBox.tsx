import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function TitleBox({ children }: Props) {
  return (
    <div className="w-searchWidth h-headerHeight bg-lightBrownTP text-navSize rounded-t-radius10 p-right">
      {children}
    </div>
  );
}
