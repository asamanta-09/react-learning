import { useContext } from "react";
import { RiChatDeleteFill } from "react-icons/ri";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div>
      <div className="card post-card">
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}> <RiChatDeleteFill /> </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hastag">{tag}</span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            <span>This post has been reacted by {post.reactions.likes} people.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
