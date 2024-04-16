import { useRouter } from "next/navigation";

export default function BackPageButton() {
  const router = useRouter();
  
  return (
    <svg
      width="70px"
      height="70px"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path
          d="M5 12H19M5 12L11 6M5 12L11 18"
          stroke="#D0A97E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{' '}
      </g>
    </svg>
  );
}
