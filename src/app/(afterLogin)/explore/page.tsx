import SearchForm from '../_component/SearchForm';
import TrendBox from '../_component/TrendBox';

export default function Explore() {
  return (
    <div className="border-x-1 border-lightGray min-h-screen flex w-full flex-col">
      <div className="w-full p-[20px] border-b-10 border-darkBrown h-searchDivHeight">
        <SearchForm />
      </div>
      <div className="w-full p-[20px] h-searchDivHeight">
        <div className="w-full h-headerHeight border-b-1 border-lightBrownTP text-navSize flex items-center p-right text-6xl">
          실시간 트렌드
        </div>
        <TrendBox trend="고양이" />
        <TrendBox trend="고양이" />
        <TrendBox trend="고양이" />
        <TrendBox trend="고양이" />
        <TrendBox trend="고양이" />
      </div>
    </div>
  );
}
