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
        <Link href="/home" className="inline-block">
          <div className="flex">
            {segment === 'home' ? (
              <>
                <div>
                  <HomeColorIcon />
                </div>
                <div className="font-bold mx-li">홈</div>
              </>
            ) : (
              <>
                <div>
                  <HomeIcon />
                </div>
                <div className="mx-li">홈</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li className="my-nav">
        <Link href="/search" className="inline-block">
          <div className="flex">
            {segment === 'search' ? (
              <>
                <div>
                  <CompassColorIcon />
                </div>
                <div className="font-bold mx-li">탐색</div>
              </>
            ) : (
              <>
                <div>
                  <CompassIcon />
                </div>
                <div className="mx-li">탐색</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li className="my-nav">
        <Link href="/messages" className="inline-block">
          <div className="flex">
            {segment === 'messages' ? (
              <>
                <div>
                  <MessageColorIcon />
                </div>
                <div className="font-bold mx-li">쪽지</div>
              </>
            ) : (
              <>
                <div>
                  <MessageIcon />
                </div>
                <div className="mx-li">쪽지</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li className="my-nav">
        <Link href={`/${user.id}`} className="inline-block">
          <div className="flex">
            {segment === user.id ? (
              <>
                <Image
                  src={user.image}
                  alt="user_image"
                  width={45}
                  height={45}
                  className="rounded-radiusCircle"
                  priority
                />
                <div className="font-bold mx-li">프로필</div>
              </>
            ) : (
              <>
                <Image
                  src={user.image}
                  alt="user_image"
                  width={45}
                  height={45}
                  className="rounded-radiusCircle"
                  priority
                />
                <div className="mx-li">프로필</div>
              </>
            )}
          </div>
        </Link>
      </li>
    </ul>
  );
}