'use client';
import { useRef } from 'react';

import FormBackground from './FormBackground';
import FormTitle from './FormTitle';
import InputBox from './InputBox';
import Button from './Button';

export default function SignInUserForm() {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(idRef.current?.value);
    console.log(pwRef.current?.value);
  };

  return (
    <>
      <form onSubmit={() => onSubmit}>
        <FormBackground>
          <div className="m-formTitle">
            <FormTitle text="아이디" forName="id" />
            <InputBox type="text" id="id" ref={idRef} />
          </div>
          <div className="m-formTitle">
            <FormTitle text="비밀번호" forName="password" />
            <InputBox type="password" id="password" ref={pwRef} />
          </div>
        </FormBackground>
        <div className="w-formWidth flex justify-center">
          <Button type="submit" text="로그인하기" />
        </div>
      </form>
    </>
  );
}
