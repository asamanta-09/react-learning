import { createContext, useCallback, useReducer } from "react"

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  addInitialPosts: () => { },
  deletePost: () => { }
})

const postListreducer = (currPostList, action) => {
  let newPostItems = currPostList;
  if (action.type === "DELETE_POST") {
    newPostItems = currPostList.filter(post => (post.id !== action.payload.postId))
  }
  else if (action.type === "ADD_POST") {
    newPostItems = [action.payload, ...currPostList];
  }
  else if (action.type === "ADD_INITIAL_POSTS") {
    newPostItems = action.payload.posts;
  }
  return newPostItems;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListreducer, []);

  const addPost = (postId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userID: postId,
        tags: tags,
      }
    })
  }


  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts }
    })
  }
 
  const deletePost =useCallback((postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId }
    });
  },[dispatchPostList]);

  return <PostList.Provider value={{ postList: postList, addPost: addPost, deletePost: deletePost, addInitialPosts: addInitialPosts }}> {children} </PostList.Provider>
}

export default PostListProvider;