'use client';
import { useRouter, usePathname } from 'next/navigation';

type Props = {
  trend: string;
};

export default function TrendBox({ trend }: Props) {
  const router = useRouter();
  const path = usePathname();

  const onClickTrend = (trend: string) => {
    router.push(`/search?q=${trend}`);
  };

  return (
    <>
      {path === '/explore' ? (
        <div className="w-full h-headerHeight border-b-1 border-lightBrownTP text-navSize flex items-center p-right">
          <div
            className="cursor-pointer hover:underline underline-offset-4"
            onClick={() => onClickTrend(trend)}
          >
            #{trend}
          </div>
        </div>
      ) : (
        <div className="w-searchWidth h-headerHeight border-b-1 border-lightBrownTP text-navSize flex items-center p-right">
          <div className="cursor-pointer" onClick={() => onClickTrend(trend)}>
            #{trend}
          </div>
        </div>
      )}
    </>
  );
}
