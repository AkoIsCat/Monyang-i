import Image from 'next/image';

import FollowButton from './FollowButton';

type Props = {
  image: string;
  userName: string;
  userId: string;
};

export default function FollowBox({ image, userName, userId }: Props) {
  return (
    <div>
      <div>
        <Image src={image} alt={`${userName} 프로필 이미지`} />
      </div>
      <div>
        <div>{userName}</div>
        <div>{userId}</div>
      </div>
      <div>
        <FollowButton />
      </div>
    </div>
  );
}
