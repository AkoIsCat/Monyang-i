import BackPageButton from '../../_component/BackPageButton';
import SignUpUserForm from '../../_component/SignUpUserForm';

export default function SignUpModal() {
  return (
    <div className="w-screen h-screen flex flex-col justify-between absolute inset-0 bg-modal">
      <header className="h-headerHeight px-back">
        <BackPageButton />
      </header>
      <div className="flex justify-center flex-col items-center grow">
        <SignUpUserForm />
      </div>
    </div>
  );
}
