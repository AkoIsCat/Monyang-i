import Button from '../_component/Button';
import FormBackground from '../_component/FormBackground';

const SignupPage = () => {
  return (
    <div className="w-screen flex justify-center flex-col items-center h-screen">
      <FormBackground>회원가입</FormBackground>
      <Button text='가입하기' />
    </div>
  );
};

export default SignupPage;
