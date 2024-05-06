import { ReactNode } from 'react';

export type ChildrenType = {
  children: ReactNode;
};

export type formBtnType = {
  text: string;
  type: 'submit' | 'button';
};

export type LayoutModalType = {
  children: ReactNode;
  modal: ReactNode;
};

export type FormTitleType = {
  forName: string;
  text: string;
};

export type InputType = {
  type: string;
  id: string;
};

export type TrendType = {
  trend: string;
};

export type HeaderType = {
  headerText: string;
};

export type FollowBoxType = {
  image: string;
  userName: string;
  userId: string;
};

export type FollowBtnType = {
  onClick?: () => {};
};