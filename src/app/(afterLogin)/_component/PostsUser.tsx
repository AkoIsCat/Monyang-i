import Image from 'next/image';
import dayjs from 'dayjs';
import { PostsUserType } from '@/type';

export default function PostsUser({
  userName,
  userId,
  userImage,
  createDateAt,
}: PostsUserType) {
  const date1 = dayjs(createDateAt);
  const date2 = dayjs(new Date());
  const yearDiff = date2.diff(date1, 'year');
  const monthDiff = date2.diff(date1, 'month');
  const dayDiff = date2.diff(date1, 'day');
  const hourDiff = date2.diff(date1, 'hour');
  const minuteDiff = date2.diff(date1, 'minute');

  return (
    <div className="flex">
      <div className="ml-input mr-[5px] mt-input">
        <Image
          src={userImage}
          width={50}
          height={50}
          alt="유저 프로필 이미지"
          priority
          className="rounded-radiusCircle"
        />
      </div>
      <div className="mt-input">
        <div className="text-followBtnSize">{userName}</div>
        <div className="text-followIdSize text-id">@{userId}</div>
        <div className="text-id">
          {minuteDiff < 60
            ? `${minuteDiff}분 전`
            : hourDiff < 24
            ? `${hourDiff}시간 전`
            : dayDiff < 30
            ? `${dayDiff}일 전`
            : monthDiff < 12
            ? `${monthDiff}달 전`
            : `${yearDiff}년 전`}
        </div>
      </div>
    </div>
  );
}
