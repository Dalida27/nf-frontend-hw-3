'use client'
import Posts from './component/Posts';
import AuthCheck from './authcheck';

const Home = () => (
  <AuthCheck>
    <div>
      <h1 className='text-4xl font-semibold pt-3 pb-7 ml-28'>All Posts</h1>
      <div className=''> 
        <Posts />
      </div>
    </div>
  </AuthCheck>
);

export default Home;