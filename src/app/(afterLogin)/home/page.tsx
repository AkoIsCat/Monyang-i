import Header from '../_component/Header';
import Posts from '../_component/Posts';

export default function Home() {
  return (
    <div className="border-x-1 border-lightGray min-h-screen">
      <Header headerText="홈" />
      <Posts />
    </div>
  );
}
