import Header from '../_component/Header';
import Posts from '../_component/Posts';
import UserProfile from '../_component/UserProfile';

export default function Profile() {
  const user = {
    userName: '아코집사',
    userId: 'ako_cat',
    userImage: '/user_images.jpg',
    followers: 100,
    following: 200,
    createdPostsCount: 50,
    introduction: '고양이가 세상을 구한다 줄여서 고세구',
  };

  return (
    <div className="border-x-1 border-lightGray min-h-screen">
      <Header headerText={user.userName} />
      <UserProfile
        userName={user.userName}
        userId={user.userId}
        userImage={user.userImage}
        followers={user.followers}
        following={user.following}
        createdPostsCount={user.createdPostsCount}
        introduction={user.introduction}
      />
      <Posts />
    </div>
  );
}
