'use client';
import PostsUser from './PostsUser';
import Image from 'next/image';
import { faker } from '@faker-js/faker';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import ActionBox from './ActionBox';

export default function Posts() {
  const postsUser = {
    userName: '아코집사',
    postId: '1',
    userId: 'ako_cat',
    date: '2024-05-15 22:30:45',
    image: '/user_images.jpg',
    content: '안녕하세용 아코집사에요!',
    contentImage: faker.image.url(),
    contentImageId: 1,
  };

  const path = usePathname();
  const router = useRouter();

  const onClickImage = () => {
    router.push(
      `/${postsUser.userId}/status/${postsUser.postId}/photo/${postsUser.contentImageId}`
    );
  };

  return (
    <div>
      {path !== '/home' &&
        path !== '/search' &&
        path !== 'explore' &&
        path !== 'message' && (
          <div className="px-[20px]">
            <div className="border " />
          </div>
        )}
      <div>
        <PostsUser
          userName={postsUser.userName}
          userId={postsUser.userId}
          userImage={postsUser.image}
          createDateAt={postsUser.date}
        />
      </div>
      <div className="text-navSize m-input ">{postsUser.content}</div>
      <div className="relative">
        <img
          src={postsUser.contentImage}
          alt=""
          className="w-full cursor-pointer"
          id={postsUser.contentImageId}
          onClick={onClickImage}
        />
      </div>
      <div className="m-input">
        <ActionBox
          heartStatus={true}
          heartCount={20}
          repostsStatus={false}
          repostsCount={0}
          commentCount={10}
        />
      </div>
      {(path === '/home' || path === '/search') && (
        <div className="text-headerSize py-right px-[20px] border-b-10 border-darkBrown" />
      )}
      {path !== '/home' &&
        path !== '/search' &&
        path !== 'explore' &&
        path !== 'message' && (
          <div className="px-[20px]">
            <div className="border " />
          </div>
        )}
    </div>
  );
}
