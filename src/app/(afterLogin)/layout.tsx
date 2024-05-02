import { ReactNode } from 'react';
import Image from 'next/image';

import NavMenu from './_component/NavMenu';
import MonyangIcon from '/public/monyang-i.png';
import Link from 'next/link';
import SearchForm from './_component/SearchForm';
import TitleBox from './_component/TitleBox';
import TrendBox from './_component/TrendBox';
import RightSearch from './_component/RightSearch';

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
        <RightSearch />
      </section>
    </div>
  );
}
