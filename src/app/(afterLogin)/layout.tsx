import Image from 'next/image';
import { ChildrenType } from '@/type';

import NavMenu from './_component/NavMenu';
import MonyangIcon from '/public/monyang-i_vector2.png';
import Link from 'next/link';
import RightSearch from './_component/RightSearch';
import TitleBox from './_component/TitleBox';
import FollowBox from './_component/FollowBox';

export default function AfterLoginLayout({ children }: ChildrenType) {
  const user = {
    image: '/user_images.jpg',
    userName: '아코집사',
    userId: 'ako_cat',
  };

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
          <div className="w-searchWidth py-back my-input">
            <TitleBox>팔로우 추천</TitleBox>
            <FollowBox
              image={user.image}
              userName={user.userName}
              userId={user.userId}
            />
            <FollowBox
              image={user.image}
              userName={user.userName}
              userId={user.userId}
            />
            <FollowBox
              image={user.image}
              userName={user.userName}
              userId={user.userId}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
