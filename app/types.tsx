export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string;
  reactions: any;
  views: number;
  userId: number;
}

export interface PostUpdateData {
  title: string;
  body: string;
  tags: string;
}

export interface PostData {
  id: number;
  title: string;
  body: string;
  tags: string;
}