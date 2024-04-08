import Image from 'next/image';

import MonyangIcon from '/public/monyang-i.png';

const BeforeLoginPage = () => {
  return (
    <div className='flex justify-center flex-col items-center h-screen'>
      <Image src={MonyangIcon} alt="모냥이 아이콘" width={150} height={150} />
      <div className='text-rootSize'>모냥이</div>
      <div className='my-2'>
        <button className='w-buttonWidth h-buttonHeight bg-lightBrown rounded-radiusTenPx text-2xl'>로그인</button>
      </div>
      <div className='my-2'>
        <button className='w-buttonWidth h-buttonHeight bg-lightBrown rounded-radiusTenPx text-2xl'>회원가입</button>
      </div>
    </div>
  );
};

export default BeforeLoginPage;
