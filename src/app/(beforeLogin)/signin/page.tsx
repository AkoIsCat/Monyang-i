import { useRouter } from 'next/navigation';

import SignInUserForm from '../_component/SignInUserForm';
import BackPageButton from '../_component/BackPageButton';

const SigninPage = () => {

  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <header className="h-headerHeight px-back">
        <BackPageButton />
      </header>
      <div className="flex justify-center flex-col items-center grow">
        <SignInUserForm />
      </div>
    </div>
  );
};

export default SigninPage;
