import BackPageButtonX from '../../_component/BackPageButtonX';
import SignInUserForm from '../../_component/SignInUserForm';

export default function SignInModal() {
  return (
    <div className="w-screen h-screen flex flex-col justify-between absolute inset-0 bg-modal">
      <header className="h-headerHeight px-back"></header>
      <div className="flex justify-center flex-col items-center grow">
        <SignInUserForm />
      </div>
    </div>
  );
}
