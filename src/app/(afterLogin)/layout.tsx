import { ReactNode } from 'react';
import Image from 'next/image';

import NavMenu from './_component/NavMenu';
import MonyangIcon from '/public/monyang-i.png';
import Link from 'next/link';
import SearchForm from './_component/SearchForm';

type Props = {
  children: ReactNode;
};

export default function AfterLoginLayout({ children }: Props) {
  return (
    <div className="flex">
      <div className="grow flex justify-center">
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
      <div className="w-contentsWidth grow-0">{children}</div>
      <div className="grow px-padding15">
        <div className="my-input">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}
