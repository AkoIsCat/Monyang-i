import Button from '../_component/Button';
import SignUpUserForm from '../_component/SignUpUserForm';
import BackPageButton from '../_component/BackPageButton';

const SignupPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <header className="h-headerHeight px-back">
        <BackPageButton />
      </header>
      <div className="flex justify-center flex-col items-center grow">
        <SignUpUserForm />
      </div>
    </div>
  );
};

export default SignupPage;
