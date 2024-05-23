import HeartIcon from './HeartIcon';
import ShareIcon from './ShareIcon';
import RepostIcon from './RepostIcon';
import CommentIcon from './CommentIcon';
import { ActionType } from '@/type';
import HeartColorIcon from './HeartColorIcon';
import RepostColorIcon from './RepostColorIcon';

export default function ActionBox({
  heartStatus,
  heartCount,
  repostsStatus,
  repostsCount,
  commentCount,
}: ActionType) {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="mx-[10px] flex items-center">
          {!heartStatus && <HeartIcon />}
          {heartStatus && <HeartColorIcon />}
          <div className="mx-[10px] text-followBtnSize">{heartCount}</div>
        </div>
        <div className="mx-[10px] flex items-center">
          {!repostsStatus && <RepostIcon />}
          {repostsStatus && <RepostColorIcon />}
          <div className="mx-[10px] text-followBtnSize">{repostsCount}</div>
        </div>
      </div>
      <div className="flex">
        <div className="mx-[10px] flex items-center">
          <CommentIcon />
          <div className="mx-[10px] text-followBtnSize">{commentCount}</div>
        </div>
        <div className="mx-[10px]">
          <ShareIcon />
        </div>
      </div>
    </div>
  );
}
