import { FollowBtnType } from '@/type';

export default function FollowButton({ onClick }: FollowBtnType) {
  return (
    <button
      onClick={onClick}
      className="text-followBtnSize text-white bg-grayBlack w-followBtnWidth h-inputHeight rounded-radius15"
    >
      팔로우
    </button>
  );
}
