import { LayoutModalType } from '@/type';

export default function Layout({ children, modal }: LayoutModalType) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
