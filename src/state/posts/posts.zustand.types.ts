import {Post} from '../../types/jsonPlaceholder.types';

export interface PostsZustand {
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

export interface PostsZustandValues {
  posts: Post[] | null;
}

export interface PostsZustandMethods {
  setPosts: (posts: Post[] | null) => void;

  reset: () => void;
}

export type PostsZustandState = PostsZustandValues & PostsZustandMethods;
