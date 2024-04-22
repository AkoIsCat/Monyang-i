'use client';
import { useRouter } from 'next/navigation';

export default function BackPageButton() {
  const router = useRouter();

  const onClickBackBtn = () => {
    router.back();
  };

  return (
    <svg
      width="34px"
      height="28px"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onClick={onClickBackBtn}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path
          d="M5 12H19M5 12L11 6M5 12L11 18"
          stroke="#D0A97E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{' '}
      </g>
    </svg>
  );
}
