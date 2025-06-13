import { useContext } from 'react';
import { Form, redirect } from 'react-router-dom'
import { PostList } from '../store/post-list-store';

const CreatePost = () => {

  return (
    <div className='create-post'>
      <Form method='POST'>
        <div className="hello">
          <div className="mb-3 input-box">
            <label htmlFor="userId" className="form-label">User Id</label>
            <input type="text" className="form-control" id="userId" name="userId" placeholder='Enter Your user id here..' />
          </div>

          <div className="mb-3 input-box">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" placeholder='Enter the title of the post here..' />
          </div>

          <div className="mb-3">
            <label htmlFor="reactions" className="form-label">No of recations</label>
            <input type="number" className="form-control" id="reactions" name="reactions" placeholder='How many people react your post..' />
          </div>
        </div>

        <div className="mb-3 content-box">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea rows={4} type="text" className="form-control" id="content" name='body' placeholder='Enter the post conetnt here..' />
        </div>

        <div className="hello2">
          <div className="mb-3 tags">
            <label htmlFor="tags" className="form-label">HashTags</label>
            <textarea type="text" className="form-control" id="tags" name='tags' placeholder='Enter the hashtags separated by space..' />
          </div>

          <button type="submit" className="btn btn-primary my-btn">Post</button>
        </div>
      </Form>
    </div>
  )
}

export async function createPostAction(data) {

  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  postData.reactions = { likes: postData.reactions };

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  })
    .then(res => res.json())
    .then((post) => {
      console.log(post)
    });

  return redirect("/");
};

export default CreatePost
