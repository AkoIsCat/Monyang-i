import Image from 'next/image';
import Link from 'next/link';

import MonyangIcon from '/public/monyang-i.png';
import Button from './_component/Button';

const BeforeLoginPage = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <Image src={MonyangIcon} alt="모냥이 아이콘" width={150} height={150} />
      <div className="text-rootSize">모냥이</div>
      <Link href="/signin" className="my-2">
        <Button type='button' text="로그인" />
      </Link>
      <Link href="/signup" className="my-2">
        <Button type='button' text="회원가입" />
      </Link>
    </div>
  );
};

export default BeforeLoginPage;
