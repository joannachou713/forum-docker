import PostItem from './post_item.jsx'

function PostContainer() {
  const posts = [<PostItem title='abc'/>, <PostItem title='abc1'/>]

  return (
    <div className="post-container">
      post container
      {posts}
    </div>
  );
}

export default PostContainer;
