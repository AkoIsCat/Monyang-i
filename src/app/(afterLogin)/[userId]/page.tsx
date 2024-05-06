import Header from '../_component/Header';

export default function Profile() {
  const user = {
    userName: '아코집사',
  };

  return (
    <div className="border-x-1 border-lightGray min-h-screen">
      <Header headerText={user.userName} />
    </div>
  );
}
