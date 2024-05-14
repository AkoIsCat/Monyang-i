'use client';
import { usePathname } from 'next/navigation';
import { HeaderType } from '@/type';

export default function Header({ headerText }: HeaderType) {
  const path = usePathname();

  return (
    <div className="text-headerSize py-right px-[20px] border-b-10 border-darkBrown">
      <div>{headerText}</div>
      {path === '/home' && (
        <div className="flex">
          <div className="w-1/2 text-center text-trendSize cursor-pointer">
            모두
          </div>
          <div className="w-1/2 text-center text-trendSize cursor-pointer">
            팔로우 중
          </div>
        </div>
      )}
    </div>
  );
}
