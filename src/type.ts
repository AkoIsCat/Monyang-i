import { ReactNode } from 'react';

export type ChildrenType = {
  children: ReactNode;
};

export type Type = {
  text: string;
  type: 'submit' | 'button';
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
