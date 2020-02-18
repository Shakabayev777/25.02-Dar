import React, { useState, useEffect } from 'react';
import './App.css';
import PostsList from './posts/PostsList';
import Header from './layout/Header';
import Content from './layout/Content';
import Sider from './layout/Sider';
import LikesCounter from './LikesCounter';
import UserAvatar from './user/UserAvatar';
import UserContext from './user/UserContext';

const postsData = [
  {
    id: 1,
    title: 'My first post',
    text: 'New Post in the blog',
    liked: false,
  },
  {
    id: 2,
    title: 'The second post',
    text: 'Awesome text!',
    liked: false,
  },
  {
    id: 3,
    title: 'Another post',
    text: 'Hello World',
    liked: false,
  }
];

const user = {
  firstName: 'Miras',
  lastName: 'Magzom',
}

function App() {

  const [posts, setPosts] = useState(postsData);
  const [likedCount, setLikedCount] = useState(0);

  useEffect(() => {
    setLikedCount(posts.filter(p => p.liked).length);
  }, [posts]);

  const onLikedClicked = (postId) => {
    const newPosts = posts.map(post => {
      if (postId === post.id) {
        post.liked = !post.liked;
      }
      return post;
    });
    setPosts(newPosts);
  }

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Header>
          <UserAvatar/>
        </Header>
        <div className="App__main">
          <Sider></Sider>
          <Content>
            <LikesCounter count={likedCount} />
            <PostsList items={posts} onLikedClicked={onLikedClicked} />
          </Content>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
