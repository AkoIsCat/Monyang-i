import { UserProfileType } from '@/type';
import Image from 'next/image';
import FollowButton from './FollowButton';
import DmButton from './DmButton';

export default function UserProfile({
  userName,
  userId,
  userImage,
  followers,
  following,
  createdPostsCount,
  introduction,
}: UserProfileType) {
  return (
    <>
      <div className="flex">
        <div className="my-[20px] mx-[40px]">
          <Image
            src={userImage}
            width={100}
            height={100}
            alt="유저 프로필 이미지"
            priority
            className="rounded-radiusCircle"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex mt-nav">
            <div className="flex flex-col mr-[10px]">
              <div className="text-profileNameSize">{userName}</div>
              <div className="text-id text-followBtnSize">@{userId}</div>
            </div>
            <div className="flex items-center ml-[20px]">
              <div className="mx-[5px]">
                <DmButton />
              </div>
              <div className="mx-[5px]">
                <FollowButton />
              </div>
            </div>
          </div>
          <div className="text-inputSize mt-input">{introduction}</div>
        </div>
      </div>
      <div className="flex my-[20px] mx-[40px] text-trendSize">
        <div className="mx-input font-bold">{following} 팔로워</div>
        <div className="mx-input font-bold">{followers} 팔로우 중</div>
        <div className="mx-input font-bold">{createdPostsCount} 게시글</div>
      </div>
    </>
  );
}
