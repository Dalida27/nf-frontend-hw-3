import api from './axios';

export const fetchPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const deletePost = async (postId) => {
  await api.delete(`/posts/${postId}`);
};

export const updatePost = async (postId, data) => {
  await api.put(`/posts/${postId}`, data);
};

export const addPost = async (postData) => {
  await api.post('/posts', postData);
};

export default api;

