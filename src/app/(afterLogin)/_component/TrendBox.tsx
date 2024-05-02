'use client';
import { useRouter } from 'next/navigation';

type Props = {
  trend: string;
};

export default function TrendBox({ trend }: Props) {
  const router = useRouter();

  const onClickTrend = (trend: string) => {
    router.push(`/search?q=${trend}`);
  };

  return (
    <div className="w-searchWidth h-headerHeight border-b-1 border-lightBrownTP text-navSize flex items-center p-right">
      <div className="cursor-pointer" onClick={() => onClickTrend(trend)}>
        #{trend}
      </div>
    </div>
  );
}
