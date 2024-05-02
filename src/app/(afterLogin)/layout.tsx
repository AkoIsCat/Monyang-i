import { ReactNode } from 'react';
import Image from 'next/image';

import NavMenu from './_component/NavMenu';
import MonyangIcon from '/public/monyang-i.png';
import Link from 'next/link';
import RightSearch from './_component/RightSearch';
import TitleBox from './_component/TitleBox';

type Props = {
  children: ReactNode;
};

export default function AfterLoginLayout({ children }: Props) {
  return (
    <div className="flex">
      <section className="grow">
        <div className="flex justify-end mr-[100px]">
          <div>
            <div className="my-input">
              <Link href="/home" className="inline-block px-right">
                <Image
                  src={MonyangIcon}
                  alt="모냥이 아이콘"
                  width={58}
                  priority
                />
              </Link>
            </div>
            <nav>
              <NavMenu />
            </nav>
          </div>
        </div>
      </section>
      <section>
        <div className="w-contentsWidth grow-0">{children}</div>
      </section>
      <section className="grow">
        <div className="px-padding15">
          <RightSearch />
          <div className="w-searchWidth py-back mt-[64px]">
            <TitleBox>팔로우 추천</TitleBox>
          </div>
        </div>
      </section>
    </div>
  );
}
