import React, { useContext, useRef } from 'react'
import { PostList } from '../store/post-list-store';

const CreatePost = () => {

  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef(); 
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";

    addPost(userId, postTitle, postBody, reactions, tags);
  }

  return (
    <div className='create-post'>
      <form onSubmit={handleSubmit}>
        <div className="hello">
          <div className="mb-3 input-box">
            <label htmlFor="userId" className="form-label">User Id</label>
            <input type="text" className="form-control" id="userId" ref={userIdElement} placeholder='Enter Your user id here..' />
          </div>

          <div className="mb-3 input-box">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" ref={postTitleElement} placeholder='Enter the title of the post here..' />
          </div>

          <div className="mb-3">
            <label htmlFor="reactions" className="form-label">No of recations</label>
            <input type="number" className="form-control" id="reactions" ref={reactionsElement} placeholder='How many people react your post..' />
          </div>
        </div>

        <div className="mb-3 content-box">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea rows={4} type="text" className="form-control" id="content" ref={postBodyElement} placeholder='Enter the post conetnt here..' />
        </div>

        <div className="hello2">
          <div className="mb-3 tags">
            <label htmlFor="tags" className="form-label">HashTags</label>
            <textarea type="text" className="form-control" id="tags" ref={tagsElement} placeholder='Enter the hashtags separated by space..' />
          </div>

          <button type="submit" className="btn btn-primary my-btn">Post</button>
        </div>

      </form>
    </div>
  )
}

export default CreatePost
