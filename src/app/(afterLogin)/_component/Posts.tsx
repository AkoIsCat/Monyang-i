import PostsUser from './PostsUser';
import Image from 'next/image';
import { faker } from '@faker-js/faker';

export default function Posts() {
  const postsUser = {
    userName: '아코집사',
    userId: 'ako_cat',
    date: '2024-05-15 22:30:45',
    image: '/user_images.jpg',
    content: '안녕하세용 아코집사에요!',
    contentImage: faker.image.avatar(),
  };

  return (
    <div>
      <div>
        <PostsUser
          userName={postsUser.userName}
          userId={postsUser.userId}
          userImage={postsUser.image}
          createDateAt={postsUser.date}
        />
      </div>
      <div className="text-navSize m-input ">{postsUser.content}</div>
      <div>
        <Image
          src={postsUser.contentImage}
          alt="게시글 이미지"
          priority
          width={100}
          height={100}
        />
      </div>
      <div>상태</div>
    </div>
  );
}
