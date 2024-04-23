import { ReactNode } from 'react';
import Image from 'next/image';

import NavMenu from './_component/NavMenu';
import MonyangIcon from '/public/monyang-i.png';
import Link from 'next/link';

type Props = {
  children: ReactNode;
};

export default function AfterLoginLayout({ children }: Props) {
  return (
    <div className="flex justify-center">
      <div className="grow flex justify-center items-center">
        <div className="w-navWidth">
          <div className="my-input">
            <Link href="/home">
              <Image
                src={MonyangIcon}
                alt="모냥이 아이콘"
                width={48}
                priority
              />
            </Link>
          </div>
          <NavMenu />
        </div>
      </div>
      <div className="w-contentsWidth grow-0">{children}</div>
      <div className="grow px-right">검색 & 팔로우 추천</div>
    </div>
  );
}
