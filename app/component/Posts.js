import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost, updatePost, addPost } from '../api';
import Link from 'next/link';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [editPostId, setEditPostId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [newPost, setNewPost] = useState({ id: 0, title: '', body: '', tags: '' });

  useEffect(() => {
    fetchPosts().then(data => setPosts(data.posts.slice(0, 10)));
  }, []);

  const handleDelete = async (postId) => {
    await deletePost(postId);
    setPosts(posts.filter(post => post.id !== postId));
  };

  const handleEdit = (postId, title) => {
    setEditPostId(postId);
    setEditTitle(title);
  };

  const handleSave = async (postId) => {
    await updatePost(postId, { title: editTitle });
    setEditPostId(null);
    fetchPosts().then(data => setPosts(data.posts.slice(0, 10)));
  };

  // const handleAddPost = async () => {
  //   const { id, title, body, tags } = newPost;
  //   await addPost({ id, title, body, tags });
  //   fetchPosts().then(data => setPosts(data.posts.slice(0, 10)));
  //   setNewPost({ id: 0, title: '', body: '', tags: '' });
  // };

  return (
    <div className=''>
      <div className='w-2/5 m-auto'>
        {/* <div className='mb-5'>
          <h2>Add New Post</h2>
          <input
            type="text"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            placeholder="Title"
            className="border rounded px-3 py-2 mb-2"
          />
          <textarea
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            placeholder="Body"
            className="border rounded px-3 py-2 mb-2"
          />
          <input
            type="text"
            value={newPost.tags}
            onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
            placeholder="Tags"
            className="border rounded px-3 py-2 mb-2"
          />
          <button onClick={handleAddPost}>Add Post</button>
        </div> */}
        {posts.map(post => (
          <div className='border border-[#000] rounded-lg mt-5 px-5 pt-3 pb-5 mb-10' key={post.id}>
            <div>
              <small>Post number: {post.id}</small>
              {editPostId === post.id ? (
                <div>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="border rounded px-3 py-2"
                  />
                  <button onClick={() => handleSave(post.id)}>Save</button>
                </div>
              ) : (
                <h2 className='text-xl pt-2 pb-5'><span className='text-2xl font-semibold'>Title: </span>{post.title}</h2>
              )}
              <div className='flex items-center justify-between'>
                <div>
                  <Link className='border-[#000] border rounded-full px-3 py-2 bg-[#fff] text-[#ec4d4d] font-semibold' href={`/posts/${post.id}`}>Read more</Link>
                </div>
                <div>
                  <button className='mr-5' onClick={() => handleDelete(post.id)}>Delete</button>
                  {editPostId !== post.id && (
                    <button onClick={() => handleEdit(post.id, post.title)}>Edit</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
