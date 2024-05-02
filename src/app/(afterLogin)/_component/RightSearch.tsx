'use client';
import { usePathname } from 'next/navigation';

import SearchForm from './SearchForm';
import TitleBox from './TitleBox';
import TrendBox from './TrendBox';

export default function RightSearch() {
  const path = usePathname();

  if (path === '/explore') {
    return null;
  }

  return (
    <>
      <div className="my-input">
        <SearchForm />
      </div>
      <div className="w-searchWidth py-back mb-[64px]">
        <TitleBox>실시간 트렌드</TitleBox>
        <TrendBox trend="고양이" />
        <TrendBox trend="고양이" />
        <TrendBox trend="고양이" />
        <TrendBox trend="고양이" />
        <TrendBox trend="고양이" />
      </div>
    </>
  );
}
