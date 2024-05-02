type Props = {
  onClick?: () => {};
};

export default function FollowButton({ onClick }: Props) {
  return <button onClick={onClick}>팔로우</button>;
}
