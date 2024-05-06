import Image from 'next/image';
import { FollowBoxType } from '@/type';

import FollowButton from './FollowButton';


export default function FollowBox({ image, userName, userId }: FollowBoxType) {
  return (
    <div className="flex justify-between w-searchWidth h-followBoxHeight items-center border-b-1 border-lightBrownTP hover:bg-lightBrownTP cursor-pointer">
      <div className="flex px-right">
        <div>
          <Image
            src={image}
            alt={`${userName} 프로필 이미지`}
            width={50}
            height={50}
            priority
            className="rounded-radiusCircle"
          />
        </div>
        <div className="mx-[10px]">
          <div className="text-trendSize">{userName}</div>
          <div className="text-followIdSize text-id">@{userId}</div>
        </div>
      </div>
      <div className="px-right">
        <FollowButton />
      </div>
    </div>
  );
}
