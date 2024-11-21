import {User} from '../../types/jsonPlaceholder.types';

export interface UsersZustand {
  body: React.JSX.Element;
  title: string;
  footerCount?: number | null;
  isFooterDisabled?: boolean;
  stepFooterText?: string;
  hasFooter?: boolean;
  isScrollEnabled?: boolean;
  shouldUseBodyPadding?: boolean;
  isHeaderDisabled?: boolean;
}

export interface UsersZustandValues {
  users: User[] | null;
}

export interface UsersZustandMethods {
  setUsers: (users: User[] | null) => void;
  getUserById: (userId: number) => User | null;
  reset: () => void;
}

export type UsersZustandState = UsersZustandValues & UsersZustandMethods;
