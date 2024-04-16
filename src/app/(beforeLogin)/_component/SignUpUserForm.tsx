'use client';
import { useRef } from 'react';

import Button from './Button';
import FormTitle from './FormTitle';
import InputBox from './InputBox';
import FormBackground from './FormBackground';

export default function SignUpUserForm() {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const profileRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(idRef.current?.value);
    console.log(nameRef.current?.value);
    console.log(pwRef.current?.value);
    console.log(profileRef.current?.value);
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
            <FormTitle text="닉네임" forName="name" />
            <InputBox type="text" id="name" ref={nameRef} />
          </div>
          <div className="m-formTitle">
            <FormTitle text="비밀번호" forName="password" />
            <InputBox type="password" id="password" ref={pwRef} />
          </div>
          <div className="m-formTitle">
            <FormTitle text="프로필 사진" forName="profile_image" />
            <InputBox type="file" id="profile_image" ref={profileRef} />
          </div>
        </FormBackground>
        <div className="w-formWidth flex justify-center">
          <Button type="submit" text="가입하기" />
        </div>
      </form>
    </>
  );
}
