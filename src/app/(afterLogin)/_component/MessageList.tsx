import { MessageType } from '@/type';

export default function MessageList({
  profileImg,
  userName,
  userId,
  latestDate,
  message,
}: MessageType) {
  return (
    <div>
      <div>{profileImg}</div>
      <div>
        <div>
          <div>{userName}</div>
          <div>{userId}</div>
          <div>{latestDate}</div>
        </div>
        <div>{message}</div>
      </div>
    </div>
  );
}
