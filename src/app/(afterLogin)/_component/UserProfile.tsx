import { UserProfileType } from '@/type';
import Image from 'next/image';

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
    <div className="flex">
      <div>
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
        <div className="flex">
          <div className="flex flex-col">
            <div>{userName}</div>
            <div>@{userId}</div>
          </div>
          <div className="flex">
            <div>쪽지</div>
            <div>팔로우</div>
          </div>
        </div>
        <div>{introduction}</div>
        <div className="flex">
          <div>{following} 팔로워</div>
          <div>{followers} 팔로우 중</div>
          <div>{createdPostsCount} 게시글</div>
        </div>
      </div>
    </div>
  );
}
