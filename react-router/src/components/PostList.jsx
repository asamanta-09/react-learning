import Post from './Post';
import WelcomeMessage from './WelcomeMessage';
import { useLoaderData } from 'react-router-dom';

const PostList = () => {
  const postList = useLoaderData();
  return (
    <div className='post-list'>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map(post => <Post key={post.id} post={post} />)}
    </div>
  )
}

export const postLoader = async () => {
  const res = await fetch('https://dummyjson.com/posts');
  const data = await res.json();
  return data.posts;
}

export default PostList;
