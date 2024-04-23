'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image';

import HomeIcon from './HomeIcon';
import HomeColorIcon from './HomeColorIcon';
import CompassIcon from './CompassIcon';
import CompassColorIcon from './CompassColorIcon';
import MessageIcon from './MessageIcon';
import MessageColorIcon from './MessageColorIcon';

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();

  const user = {
    id: 'user',
    image: '/user_images.jpg',
  };

  return (
    <ul className="text-navSize">
      <li className="my-nav">
        <Link href="/home">
          {segment === 'home' ? (
            <div className="flex">
              <div>
                <HomeColorIcon />
              </div>
              <div className="font-bold mx-li">홈</div>
            </div>
          ) : (
            <div className="flex">
              <div>
                <HomeIcon />
              </div>
              <div className="mx-li">홈</div>
            </div>
          )}
        </Link>
      </li>
      <li className="my-nav">
        <Link href="/search">
          {segment === 'search' ? (
            <div className="flex">
              <div>
                <CompassColorIcon />
              </div>
              <div className="font-bold mx-li">탐색</div>
            </div>
          ) : (
            <div className="flex">
              <div>
                <CompassIcon />
              </div>
              <div className="mx-li">탐색</div>
            </div>
          )}
        </Link>
      </li>
      <li className="my-nav">
        <Link href="/messages">
          {segment === 'messages' ? (
            <div className="flex">
              <div>
                <MessageColorIcon />
              </div>
              <div className="font-bold mx-li">쪽지</div>
            </div>
          ) : (
            <div className="flex">
              <div>
                <MessageIcon />
              </div>
              <div className="mx-li">쪽지</div>
            </div>
          )}
        </Link>
      </li>
      <li className="my-nav">
        <Link href={`/${user.id}`}>
          {segment === user.id ? (
            <div className="flex">
              <Image
                src={user.image}
                alt="user_image"
                width={45}
                height={45}
                className="rounded-radiusCircle"
                priority
              />
              <div className="font-bold mx-li">프로필</div>
            </div>
          ) : (
            <div className="flex">
              <Image
                src={user.image}
                alt="user_image"
                width={45}
                height={45}
                className="rounded-radiusCircle"
                priority
              />
              <div className="mx-li">프로필</div>
            </div>
          )}
        </Link>
      </li>
    </ul>
  );
}
