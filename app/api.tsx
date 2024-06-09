import api from './axios';
import { PostUpdateData } from './types';
import { PostData } from './types'; 

export const fetchPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const deletePost = async (postId: number) => {
  await api.delete(`/posts/${postId}`);
};
export const updatePost = async (postId:number, data: PostUpdateData) => {
  await api.put(`/posts/${postId}`, data);
};

export const addPost = async (postData: PostData) => {
  await api.post('/posts', postData);
};

export default api;

