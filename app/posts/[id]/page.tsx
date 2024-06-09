"use client";
import { useParams } from 'next/navigation';
import { fetchPosts } from '../../api';
import { useEffect, useState } from 'react';
import { Post } from '../../types';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      fetchPosts().then(data => {
        const foundPost = data.posts.find(p => p.id === parseInt(id));
        setPost(foundPost || null);
      });
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <div className='w-2/5 m-auto mt-10'> 
       <h1 className='text-4xl mb-4 font-semibold'>{post.title}</h1>
       <small>Post number: 1</small>
       <img className='my-7' src="https://media.licdn.com/dms/image/C4D12AQGA10Y9UITT3g/article-cover_image-shrink_600_2000/0/1520228023154?e=2147483647&v=beta&t=dE2mQWiRLYfYOZ7SvbLNYrnwipNJfD-ZB_UrEpg5qlw"/>
       <p className='text-3xl font-semibold'>Main part</p>
       <p className='text-lg mt-3'>{post.body}</p>
       <p className='mt-3'>Tags for post: #{post.tags}</p>
      </div>
    </div>
  );
};

export default PostDetail;
